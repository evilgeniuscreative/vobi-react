import Layout from '../../components/Layout/Layout';
import VobiAPI from '../../components/VobiAPI/VobiAPI';

const Count = () => {
  return (
    <>
      <Layout
        mainClasses='main-page'
        sectionClasses='main-content'
        articleClasses='main-single'
        headingText='Download Counts'
      >
        <h2>Count</h2>
        <p>Still counting</p>
        <VobiAPI />
      </Layout>
    </>
  );
};

export default Count;
