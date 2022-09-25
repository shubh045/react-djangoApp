from django.db import models
# import string
# import random

# def generate_unique_id():
#     length=6
#     while True:
#         code=''.join(random.choices(string.ascii_lowercase, k=length))
#         if Todos.objects.filter(code=code).count() == 0:
#             break
#     return code


# Create your models here.
class Todos(models.Model):
    # code = models.CharField(max_length=8, default="", unique=True)
    todo = models.CharField(max_length=500, default=False)
    created_at = models.DateTimeField(auto_now_add=True)
