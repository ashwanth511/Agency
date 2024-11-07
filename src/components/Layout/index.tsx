'use client';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Layout;
