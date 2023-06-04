import React from 'react'

function TextToSpeech() {
    return (
        <div>
            <h1>Text to speech</h1>
            <p>Type your question, ask Chat GPT and press PLAY.</p>

            <div className="input-container">
                <textarea id="text-input" placeholder="Type here..."></textarea>
            </div>
            <a id="submit-btn" href='#0' onClick={window['sendToGPT']} className="button" style={{width: '300px'}}>Ask Chat GPT</a>

            <div className="input-container">
                <textarea id="response-text" placeholder="Chat GPT response will go here..."></textarea>
            </div>
            <a onClick={window['convertTextToSpeech']} href='#0' className="button" style={{width: '300px', backgroundColor: 'green'}}>PLAY</a>
            <a href='/' className='button back' style={{width: '300px'}}>GO BACK</a>
        </div>
    )
}

export default TextToSpeech