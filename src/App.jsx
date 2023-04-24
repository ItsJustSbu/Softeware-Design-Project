
import {Routes, Route, Navigate} from "react-router-dom"
import HomePage from './page/HomePage';
import RegistrationPage from './page/RegistrationPage';
import LoginPage from './page/LoginPage';
import ChatApp from './page/ChatApp';
import VideoPage from './page/VideoPage';
import MyLearning from './page/MyLearning';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to ="/login" />} />
      <Route path="/register" element={<RegistrationPage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/watch" element={<VideoPage />} />
      <Route path="/list" element={<MyLearning />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
      <Route path="/chat" element={<ChatApp />} />
      <Route path="/home" element={<HomePage />} />
      
    </Routes>
    </>
    
  )
}

export default App
