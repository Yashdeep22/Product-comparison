// src/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg_Login from './component/Reg_Login';
import Scrap from './component/Scrap';
import SplitScreen from './component/SplitScreen';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg_Login />} />
        <Route path="/product" element={<Scrap />} />
        <Route path="/product_cmp" element={<SplitScreen />} />
        
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
