from django.views.generic.base import TemplateView
from django.http import JsonResponse


# Define IndexView for serving the frontent build app

class IndexView(TemplateView):
    template_name = 'index.html'


def testMessage(request):
    return JsonResponse({
        'data': [
            {
                'id': 1,
                'testMessage': 'Hello!, I am a Django REST Framework with React.js, Lets build REST API For Your React Web Application.'
            }
        ]
    })
