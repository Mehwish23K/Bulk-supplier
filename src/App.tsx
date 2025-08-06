import Navbar from './components/common/navbar';
import { Homepage } from './pages/homepage/homepage';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Homepage />
    </div>
  );
}