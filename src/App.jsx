import './App.css';
import { Navbar } from './components/v1/Navbar';
import { Card } from './components/v1/Card';
import { Home } from './components/v1/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Resume } from './components/v1/Resume';
import { RecoilRoot } from 'recoil';
import { Professional } from './components/v1/Professional';
import { Experience } from './components/v1/Experience';
import { Contact } from './components/v1/Contact';
import { Footer } from './components/v1/Footer';

function App() {
  return (
    <div className="bg-grey w-full flex justify-center ">
      <BrowserRouter>
        <RecoilRoot>
          <div className="w-full">
            <Navbar id="navbar"></Navbar>
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<Main />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Main() {
  return (
    <div>
      <Card>
        <Home />
        <section id="resume">
          <Resume />
        </section>
        <section id="professional">
          <Professional />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Card>
    </div>
  );
}
