import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <Sections />
    </div>
  );
}

export default App;
