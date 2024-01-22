from deep_translator import GoogleTranslator


# This is a main Translator app to translate text

def translator(metaData):

    source = metaData['source']
    target = metaData['target']
    translateText = metaData['translateText']

    translator = GoogleTranslator(
        source=source,
        target=target
    )

    translatedText = translator.translate(translateText)

    queryData = {
        'data': [
            {
                'source': source,
                'target': target,
                'translatedText': translatedText,
            }
        ]
    }

    return queryData


# This function responsible for return supported languages in deep translator

def getSupportedLanguages():

    return GoogleTranslator().get_supported_languages()
