// src/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegLogin from './component/RegLogin';
import Scrap from './component/Scrap';
import SplitScreen from './component/SplitScreen';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegLogin />} />
        <Route path="/product" element={<Scrap />} />
        <Route path="/product_cmp" element={<SplitScreen />} />
        
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
