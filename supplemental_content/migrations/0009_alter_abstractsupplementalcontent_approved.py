# Generated by Django 3.2.7 on 2021-10-28 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supplemental_content', '0008_auto_20211005_1906'),
    ]

    operations = [
        migrations.AlterField(
            model_name='abstractsupplementalcontent',
            name='approved',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='abstractsupplementalcontent',
            name='locations',
            field=models.ManyToManyField(blank=True, related_name='supplemental_content', to='supplemental_content.AbstractLocation'),
        ),
    ]
