# Generated by Django 3.2.7 on 2021-10-04 19:24

import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('supplementary_content', '0008_auto_20211004_1857'),
    ]

    operations = [
        migrations.AddField(
            model_name='supplementalcontent',
            name='approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='supplementalcontent',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='supplementalcontent',
            name='date',
            field=models.CharField(blank=True, help_text='Enter one of: "YYYY", "YYYY-MM", or "YYYY-MM-DD".', max_length=10, null=True, validators=[django.core.validators.RegexValidator(message='Date must be of format "YYYY", "YYYY-MM", or "YYYY-MM-DD"! For example: 2021, 2021-01, or 2021-01-31.', regex='^\\d{4}((-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))|(-(0[1-9]|1[0-2])))?$')]),
        ),
        migrations.AddField(
            model_name='supplementalcontent',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='supplementalcontent',
            name='title',
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
        migrations.AddField(
            model_name='supplementalcontent',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='supplementalcontent',
            name='url',
            field=models.URLField(blank=True, max_length=512, null=True),
        ),
    ]
