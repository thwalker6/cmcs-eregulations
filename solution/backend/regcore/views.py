from rest_framework import generics, serializers
from django.conf import settings
from django.contrib.postgres.aggregates import StringAgg

from regcore.models import Part, ParserConfiguration, TitleConfiguration

from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import authentication
from rest_framework import exceptions


class SettingsUser:
    is_authenticated = False


class SettingsAuthentication(authentication.BasicAuthentication):
    def authenticate_credentials(self, userid, password, request=None):
        if userid == settings.HTTP_AUTH_USER and password == settings.HTTP_AUTH_PASSWORD:
            user = SettingsUser()
            user.is_authenticated = True
            return (user, None)
        raise exceptions.AuthenticationFailed('No such user')


class ListPartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = "__all__"
        extra_kwargs = {
            'document': {'write_only': True}
        }


class ExistingPartSerializer(serializers.BaseSerializer):

    def to_representation(self, instance):
        return {
            'date': instance.get("date"),
            'partName': instance.get("partName").split(","),
        }


class PartsView(generics.ListCreateAPIView):
    serializer_class = ListPartSerializer
    authentication_classes = [SettingsAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        query = Part.objects.all()
        part = self.kwargs.get("name")
        title = self.kwargs.get("title")
        if part and title:
            query = query.filter(name=part).filter(title=title).order_by('-date')
        return query

    def create(self, request, *args, **kwargs):
        query = Part.objects.filter(
            name=request.data.get("name"),
            title=request.data.get("title"),
            date=request.data.get("date"),
        )
        if query.exists():
            serializer = self.get_serializer(query.get(), data=request.data, partial=False)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

        return super().create(request, *args, **kwargs)


class ListEffectivePartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Part
        fields = ("id", "name", "title", "date", "last_updated", "structure")


class EffectiveTitlesView(generics.ListAPIView):
    serializer_class = ListEffectivePartSerializer

    def get_queryset(self):
        date = self.kwargs.get("date")
        return Part.objects.filter(date__lte=date).order_by("name", "-date").distinct("name")


class EffectivePartsView(generics.ListAPIView):
    serializer_class = ListEffectivePartSerializer

    def get_queryset(self):
        title = self.kwargs.get("title")
        date = self.kwargs.get("date")
        return Part.objects.filter(title=title).filter(date__lte=date).order_by("name", "-date").distinct("name")


class PartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ("id", "name", "title", "date", "last_updated", "document", "structure", "toc")


class EffectivePartView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [SettingsAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    serializer_class = PartSerializer
    lookup_field = "name"

    def get_queryset(self):
        title = self.kwargs.get("title")
        date = self.kwargs.get("date")
        return Part.objects.filter(title=title).filter(date__lte=date)

    def get_object(self):
        return self.get_queryset().filter(name=self.kwargs.get(self.lookup_field)).latest("date")


class ExistingPartsView(generics.ListAPIView):

    serializer_class = ExistingPartSerializer

    def get_queryset(self):
        title = self.kwargs.get("title")
        return Part.objects.filter(title=title).values('date').annotate(
            partName=StringAgg('name', delimiter=','),
        )


class ListEffectivePartTocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Part
        fields = ("id", "name", "title", "date", "last_updated", "toc")


class EffectivePartTocView(EffectivePartView):
    serializer_class = ListEffectivePartTocSerializer


class TitleConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TitleConfiguration
        fields = ("title", "subchapters", "parts")


class ParserConfigurationSerializer(serializers.ModelSerializer):
    titles = TitleConfigurationSerializer(many=True)

    class Meta:
        model = ParserConfiguration
        fields = (
            "workers",
            "attempts",
            "loglevel",
            "upload_supplemental_locations",
            "log_parse_errors",
            "skip_versions",
            "titles",
        )


class ParserConfigurationView(generics.RetrieveAPIView):
    serializer_class = ParserConfigurationSerializer

    def get_object(self):
        return ParserConfiguration.objects.all()[0]
