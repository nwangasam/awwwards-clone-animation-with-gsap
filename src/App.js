import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './styles/App.scss';
import gsap from 'gsap';

// Components
import Header from './components/header';
import Navigation from './components/navigation';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Approach from './pages/approach';
import CaseStudies from './pages/caseStudies';
import Services from './pages/services';

const routes = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'About', path: '/about-us', Component: About },
  { name: 'Approach', path: '/approach', Component: Approach },
  { name: 'Case Studies', path: '/case-studies', Component: CaseStudies },
  { name: 'Services', path: '/services', Component: Services },
];

function debounce(fn, ms){
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms)
  }
}

function App() {
  
  // Preventing flash during page load
  gsap.to('body', 0, {
    css: {
      visibility: 'visible',
    },
  });
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Get the inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debounceHandleResize = debounce(handleResize, 1000);

    window.addEventListener('resize', debounceHandleResize);

    // Cleanup eventlistener after unmounting App
    return () => {
      window.removeEventListener('resize', debounceHandleResize);
    };
  }, [dimensions.height, dimensions.width]);

  return (
    <>
      <Header />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
