# Generated by Django 2.2 on 2020-05-15 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(default='SOME STRING', max_length=400, null=True),
        ),
    ]
