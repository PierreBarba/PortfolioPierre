import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0 bg-white">
          <Experience />
        </div>
        <div className="relative z-0 bg-black">
          <Tech />
        </div>
        <div className="relative z-0 bg-white">
          <Works />
        </div>
        <Feedbacks />
        <div className="bg-white relative z-0">
          <Contact />
          <StarsCanvas />
          <earth />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
