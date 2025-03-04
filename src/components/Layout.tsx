
import '../assets/styles.scss'
import '../assets/app.scss'
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='app'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
