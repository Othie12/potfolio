import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';

export default function Gallery(){

  return (
    <div className='container bigman'>
      <header>
        <Navbar />
      </header>
      <main className='row'>
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