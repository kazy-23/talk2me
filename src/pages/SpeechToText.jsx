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
                <a id='startButton' onClick={window['startListening']} href='#0' className="button" style={{backgroundColor: 'green', width: '300px'}}>Start</a>
                <a id='stopButton' onClick={window['stopListening']} href='#0' className="button" style={{backgroundColor: 'red', width: '300px', display: 'none'}}>Stop</a>
            </div>
            <button id="submit-btn" onClick={window['sendToGPT']} className="button" style={{width: '300px'}}>Ask Chat GPT</button>

            <div className="input-container">
                <textarea id="response-text" placeholder="Chat GPT response will go here..."></textarea>
            </div>

            <a href='/' className='button back' style={{width: '300px'}}>GO BACK</a>
        </div>
    )
}

export default SpeechToText