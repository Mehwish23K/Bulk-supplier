import Navbar from './components/common/navbar';
import { Homepage } from './pages/homepage/homepage';
import './index.css';
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Homepage />
    </div>
  );
}