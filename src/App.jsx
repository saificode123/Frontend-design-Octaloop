import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; 
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1F2125] text-white font-sans selection:bg-gray-800 selection:text-white">
      
      <Navbar />

       <main className="w-full pt-[40px]">  
        <Hero />
        <Features />
        <Testimonials />
      </main>

    <Footer />
    </div>
  )
}

export default App;