import LoginUI from './Component/Login/LoginUI';
import SignUp from './Component/SignUp/SignUp';
import { Route, Routes } from "react-router-dom";
import Forget from './Component/Forget/Forget';
import ChatContent from './Component/Chat/ChatContent';



function App() {
  return (

    <div className="App">
      <Routes >
        <Route path="/" element={<LoginUI />} />
        <Route path='/account' element={<SignUp />} />
        <Route path='/reset' element={<Forget />} />
        <Route path='/chat' element={<ChatContent />} />
      </Routes>
    </div>

  );
}

export default App;
