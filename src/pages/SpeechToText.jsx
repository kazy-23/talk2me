import React from 'react'

function SpeechToText() {
    return (
        <div>
            <h1>Speech to text</h1>
            <p>Start button, talk, Stop button and ask Chat GPT!</p>

            <div className="input-container">
                <textarea id="text-input" placeholder="Your speech will appear here..."></textarea>
            </div>

            <div>
                <a onClick={window['convertSpeechToText']} href='#0' className="button" style={{backgroundColor: 'green', width: '300px'}}>Start</a>
            </div>
            <a href='#0' className="button" style={{width: '300px'}}>Ask Chat GPT</a>

            <div className="input-container">
                <textarea id="text-input" placeholder="Chat GPT response will go here..."></textarea>
            </div>

            <a href='/' className='button back' style={{width: '300px'}}>GO BACK</a>
        </div>
    )
}

export default SpeechToText