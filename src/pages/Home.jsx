import React from 'react'

function Home() {
  return (
    <div>
      <h1>Talk<span style={{color: '#03a9f4'}}>2</span>Me</h1>
      <p>Communication solution for people with special needs.</p>
      
        <div className='btn-container'>
            <a href="/speech-to-text" className="button" style={{color: 'black'}}>
                <img src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png" alt="Text-to-speech"/>
                Speech to text
            </a>
            <a href="/text-to-speech" className="button" style={{color: 'black'}}>
                <img src="https://cdn.icon-icons.com/icons2/2446/PNG/512/edit_text_icon_148716.png" alt="Text-to-speech"/>
                Text to speech
            </a>
            <a href="/fingerpose-master/dist/index.html" className="button" style={{color: 'black'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/3798/3798326.png" alt="Text-to-speech"/>
                Gestures to text
            </a>
        </div>
    </div>
  )
}

export default Home