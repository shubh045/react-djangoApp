from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Todos


class TodosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todos
        fields = ['id', 'todo', 'created_at']
