import Layout from '../components/Layout';
import Carousel from 'components/Carousel';
import data from '../assets/magazines/magazines.json';

const MagazinesPage = () => {
  return (
    <Layout>
      <h1>Magazines</h1>
      <Carousel data={data} />
    </Layout>
  );
};

export default MagazinesPage;
