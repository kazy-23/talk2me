import './App.css';
import Home from './pages/Home';
import TextToSpeech from './pages/TextToSpeech';
import SpeechToText from './pages/SpeechToText';
import GestureRecognition from './pages/GestureRecognition';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/speech-to-text" element={<SpeechToText />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/gesture-recognition" element={<GestureRecognition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
