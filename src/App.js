import './App.css';

import { Routes, Route } from "react-router-dom";
import ThisHome from './pages/thishome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ThisHome></ThisHome>}>
          <Route index element={<></>}></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
