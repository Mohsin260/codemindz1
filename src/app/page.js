import './globals.css'
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import OurWork from './components/OurWork';
import CProjects from './components/CProjects';
import Form from './form/page';



const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* <h1 className="text-3xl text-black text-center">Home</h1> */}
        <Hero />
        {/* Add About, Services, Our Work, and Contact Us sections */}
        <AboutUs />
        <Services />
        <OurWork />
        <CProjects />
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

