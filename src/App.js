import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </Router>
     
  );
}
export default App;
