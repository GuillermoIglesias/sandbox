import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Trades from '../pages/Trades';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/trades" Component={Trades} />
      </Routes>
    </BrowserRouter>
  );
}
