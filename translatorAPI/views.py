from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .translator import translator, getSupportedLanguages


# Create your views here.

@api_view(['GET', 'POST'])
def translate(request):
    if request.method == 'GET':
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    elif request.method == 'POST':
        textData = request.data

        translatedTextQuery = translator(textData)

        return Response(translatedTextQuery, status=status.HTTP_200_OK)


# This Function is responsible to respose the all supporated languages to translate text

@api_view(['GET'])
def supportedLanguages(request):
    if request.method == 'GET':

        # request_status = request.status_code

        supporatedLanguagesQuery = {
            'data': {
                'supporatedLanguages': getSupportedLanguages()
            }
        }

        return Response(supporatedLanguagesQuery, status=status.HTTP_200_OK)

    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

