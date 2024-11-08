'use client';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { PreloaderProvider } from '@/context/preloader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root>
      <PreloaderProvider>{children}</PreloaderProvider>
    </ReactLenis>
  );
};

export default Layout;
