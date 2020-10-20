//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM
import React, { useDebugValue, useState } from 'react'
import Dropdown from './dropdown'
import Convert from './convert'
const options = [
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'french',
        value: 'fr'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className='field'>
                    <label>Enter the Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr />
            <h2 className='ui header'> Output </h2>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate