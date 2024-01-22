import React from 'react'
import './TestMessage.css'
import requestToServer from '../../requestToServer/requestToServer'

export default function TestMessage() {

    const [requestData, setRequestData] = React.useState([])
    React.useEffect(() => {
        requestToServer('/api/test-message', 'GET')
            .then(d => {
                setRequestData(d.data);
            })
    }, [])

    const requestDataElements = requestData.map(data => {
        return (
            <h1 key={data.id}>
                {data.testMessage}
            </h1>
        )
    })


    return (
        <div className='test--message--cont'>
            {requestDataElements}
        </div>
    )
}
