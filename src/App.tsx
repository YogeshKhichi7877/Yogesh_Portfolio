import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import { HomeGalaxyBackground } from './components/layout/HomeGalaxyBackground';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import CustomCursor from './components/CustomCursor';

const Hero = lazy(() => import('./components/Hero'));
// const TrustStats = lazy(() => import('./components/sections/TrustStats'));
const About = lazy(() => import('./components/About'));
const TechStackGalaxy = lazy(() => import('./components/sections/TechStackGalaxy'));
const Projects = lazy(() => import('./components/Projects'));
const ProjectCaseStudies = lazy(() => import('./components/sections/ProjectCaseStudies'));
const Education = lazy(() => import('./components/Education'));
const Services = lazy(() => import('./components/sections/Services'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));
const NotFound = lazy(() => import('./components/NotFound'));

const ScreenFallback = () => (
  <div className="min-h-screen bg-os-bg text-os-text">
    <Loader isLoading />
  </div>
);

const SectionFallback = () => (
  <div className="min-h-48 bg-transparent" aria-hidden="true" />
);

const HomePage = ({ showCursor, isLoading }: { showCursor: boolean; isLoading: boolean }) => (
  <>
    {showCursor && <CustomCursor />}
    <div className="relative min-h-screen overflow-x-hidden bg-os-bg text-white">
      {isLoading && <Loader isLoading={isLoading} />}
      {!isLoading && (
        <>
          <HomeGalaxyBackground />
          <Navigation />
          <main className="relative z-10">
            <Suspense fallback={<SectionFallback />}>
              <Hero />
            </Suspense>
            {/* <Suspense fallback={<SectionFallback />}>
              <TrustStats />
            </Suspense> */}
            <Suspense fallback={<SectionFallback />}>
              <About />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <TechStackGalaxy />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <ProjectCaseStudies />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Education />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Services />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Certifications />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  </>
);

const App: React.FC = () => {
  useSmoothScroll();

  const [isLoading, setIsLoading] = useState(true);

  const showCursor = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: fine)').matches && window.innerWidth > 768;
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Suspense fallback={<ScreenFallback />}>
      <Routes>
        <Route path="/" element={<HomePage showCursor={showCursor} isLoading={isLoading} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
