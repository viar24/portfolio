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
import { useCallback, useState } from 'react';
import tailwindConfig from '../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';
import ThemeButton from './components/v1/ThemeButton';

const twFullConfig = resolveConfig(tailwindConfig);

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const theme = useCallback(() => getTheme(darkTheme), [darkTheme]);

  return (
    <div style={theme()}>
      <BrowserRouter>
        <RecoilRoot>
          <ThemeButton setDarkTheme={setDarkTheme} />
          <Navbar id="navbar"></Navbar>
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Main />}></Route>
            </Routes>
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

function getTheme(darkTheme) {
  if (darkTheme) {
    document.documentElement.classList.add('dark');
    return { background: 'black', color: twFullConfig.theme.colors['cyan'] };
  } else {
    document.documentElement.classList.remove('dark');
    return {
      background: twFullConfig.theme.colors['grey'],
      color: twFullConfig.theme.colors['green'],
    };
  }
}
