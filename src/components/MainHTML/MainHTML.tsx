import  { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  mainClasses?: string;
  sectionClasses?: string;
  articleClasses?: string;
  headingText?: string;
}

const MainHTML = ({
  children,
  mainClasses = '',
  sectionClasses = '',
  articleClasses = '',
  headingText = '',
}: MainProps) => {
  return (
    <main className={mainClasses}>
      <section className={sectionClasses}>
        <article className={articleClasses}>
          <h2>{headingText}</h2>
          {children}
        </article>
      </section>
    </main>
  );
};

export default MainHTML;
