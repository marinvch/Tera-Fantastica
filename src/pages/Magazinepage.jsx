import Layout from '../components/Layout';
import Carousel from 'components/Carousel';
import data from '../assets/magazines/magazines.json';

const MagazinesPage = () => {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Magazines</h1>
        <Carousel data={data} />
      </div>
    </Layout>
  );
};

export default MagazinesPage;
