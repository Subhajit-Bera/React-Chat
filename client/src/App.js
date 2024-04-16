import Chat from './pages/Chat';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import "./styles/ChatHeader.scss";
import "./styles/ChatBox.scss";
import "./styles/InputForm.scss";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
