import React from 'react'
import './Translator.css'
import directionIcon from '../../assets/icons/direction.svg'
import LanguageSelector from '../../Components/LanguageSelector/LanguageSelector'
import requestToServer from '../../requestToServer/requestToServer'

export default function Translator() {


    const [selectedLanguage, setSelectedLanguage] = React.useState('english')
    const [translateText, setTranslateText] = React.useState('')
    const [translatedText, setTranslatedText] = React.useState({})


    function textInputText(event) {
        setSelectedLanguage(document.getElementById('selectedLanguage').innerText)
        setTranslateText(event.target.value)
    }


    React.useEffect(() => {
        const requestData = {
            source: "auto",
            target: selectedLanguage.toLowerCase(),
            translateText: translateText
        }

        requestToServer('/api/translator/', 'POST', { 'Content-Type': 'application/json' }, requestData)
            .then(data => {
                setTranslatedText(data.data[0])
            })

    }, [selectedLanguage, translateText])


    return (
        <div className='translator--cont'>
            <section className='translator--source--cont'>
                <div className="source--language--cont ">
                    <div>Auto</div>
                </div>
                <textarea
                    name="source--translator--text"
                    id="source--translator--text"
                    cols="auto"
                    rows="auto"
                    onChange={textInputText}
                    value={translateText}
                    placeholder='Write your text here...'
                />
            </section>

            <section className="translator--diraction">
                <div className='empty--space'></div>
                <figure className='direction--icon--cont'>
                    <img src={directionIcon} alt="directionIcon" />
                </figure>
            </section>

            <section className="translator--target--cont">
                <div className="target--language--cont">
                    <LanguageSelector />
                </div>
                <div className='translated--text'>
                    <p>
                        {translatedText.translatedText == '' ? 'Output...' : translatedText.translatedText}
                    </p>
                </div>
            </section>
        </div>
    )
}
