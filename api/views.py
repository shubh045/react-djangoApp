from .serializers import TodosSerializer
from rest_framework.views import APIView
from .models import Todos
from rest_framework.response import Response
from .serializers import TodosSerializer
from api import serializers

# from rest_framework import viewsets
# Create your views here.


class TodoList(APIView):
    # queryset=Todos.objects.all()
    # serializer_class=TodosSerializer
    def get(self, request):
        detailsObj = Todos.objects.all()
        tdSerializeObj = TodosSerializer(detailsObj, many=True)
        return Response(tdSerializeObj.data)

    def post(self, request):
        serializer = TodosSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class delTodo(APIView):
    def post(self, request, pk):
        try:
            detailObj = Todos.objects.get(pk=pk)
        except:
            return Response("Not found in database")

        serializer = TodosSerializer(detailObj, data=request.data)
        if serializer.is_valid():
            detailObj.delete()
            return Response(200)
        return Response(serializer.errors)
