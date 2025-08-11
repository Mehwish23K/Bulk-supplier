import Navbar from './components/common/Navbar';
import { HomePage } from './pages';
import './index.css';
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
}