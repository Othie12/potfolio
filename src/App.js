import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';

export default function Gallery(){

  return (
    <div className="container bg-gradient-to-r from-purple-600 to to-blue-400">
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <main className='row px-5 md:px-10 pt-5'>
        <Home />
        <Skills />
        <section className='projects' id='projects'></section>
        <section className='resume' id='resume'></section>
      </main>
      <footer className='row'>
        <section className='contact' id='contact'></section>
      </footer>
    </div>
  );
}