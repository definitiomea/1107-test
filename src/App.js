import './App.css';

import { Routes, Route } from "react-router-dom";
import ThisHome from './pages/ThisHome';
import GuestBook from './pages/GuestBook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ThisHome></ThisHome>}></Route>
        <Route path='guestbook' element={<GuestBook></GuestBook>}></Route>
      </Routes>
    </div>
  );
}

export default App;
