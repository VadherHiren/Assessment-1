import './App.css';
import Form from './Form';
import Submitted from './Submitted';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />}></Route>
          <Route path='/submit' element={<Submitted />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
