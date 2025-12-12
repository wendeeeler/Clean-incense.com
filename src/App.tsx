import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Standards from './pages/Standards';
import WarmingVsBurning from './pages/WarmingVsBurning';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/warming-vs-burning" element={<WarmingVsBurning />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
