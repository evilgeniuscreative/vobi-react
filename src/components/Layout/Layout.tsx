import { ReactNode } from 'react';
import Header from '../Header/Header';
import MainHTML from '../MainHTML/MainHTML';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
  mainClasses: string;
  sectionClasses: string;
  articleClasses: string;
  headingText: string;
}

const Layout = ({
  children,
  mainClasses,
  sectionClasses,
  articleClasses,
  headingText,
}: LayoutProps) => {
  return (
    <div className={`content-container`}>
      <Header />
      <MainHTML
        mainClasses={mainClasses}
        sectionClasses={sectionClasses}
        articleClasses={articleClasses}
        headingText={headingText}
      >
        {children}
      </MainHTML>
      <Footer />
    </div>
  );
};

export default Layout;
