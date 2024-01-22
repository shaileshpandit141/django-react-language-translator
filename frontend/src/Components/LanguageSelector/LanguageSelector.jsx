import React from 'react'
import './LanguageSelector.css'
import angleRightIcon from '../../assets/icons/angle-right.svg'
import requestToServer from '../../requestToServer/requestToServer'

export default function LanguageSelector() {

    const [selectedLanguage, setSelectedLanguage] = React.useState('english')
    const [dropdownState, setDropdownState] = React.useState(true)

    function handelSelect(event) {
        const optionDropdownContainer = document.querySelector('.option--cont')

        if (dropdownState) {
            setDropdownState(false)
            optionDropdownContainer.style.height = '230px'
        } else {
            setDropdownState(true)
            optionDropdownContainer.style.height = '0px'
        }
    }

    function handelOption(event) {
        const optionDropdownContainer = document.querySelector('.option--cont')
        const selectedLanguage = event.target.innerText
        setSelectedLanguage(selectedLanguage)
        setDropdownState(true)
        optionDropdownContainer.style.height = '0px'
    }


    const [supportedLanguages, setSupportedLanguages] = React.useState([])

    React.useEffect(() => {
        requestToServer('/api/translator/get-supported-languages/', 'GET')
            .then(data => {
                setSupportedLanguages(data.data.supporatedLanguages)
            })
    }, [])

    const supportedLanguagesElements = supportedLanguages.map((language, index) => {
        return (
            <span
                key={index}
                onClick={handelOption}
            >
                {language}
            </span>
        )
    })


    return (
        <div className="custom--selector">
            <div
                onClick={handelSelect}
                className='selected--language'
            >
                <div id='selectedLanguage'>{selectedLanguage}</div>
                <figure className='figure--cont'>
                    <img src={angleRightIcon} alt="angleRightIcon" />
                </figure>
            </div>
            <div className="option--cont">
                <div className='option--inner--cont'>
                    {supportedLanguagesElements}
                </div>
            </div>
        </div>
    )
}
