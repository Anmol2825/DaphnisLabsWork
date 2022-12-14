
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Container/Main';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" exact element={<Main/>} />
    </Routes>
    </Router>
  );
}

export default App;
