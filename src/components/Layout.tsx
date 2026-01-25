import { ScrollToTop } from './ui/ScrollToTop';
import Header from '../sections/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-accent/30">
      <Header />
      {children}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
