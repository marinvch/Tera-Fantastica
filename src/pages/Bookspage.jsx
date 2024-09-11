import Layout from '../components/Layout';
import Carusel from '../components/Carousel';
import data from '../assets/books/books.json';

const BooksPage = () => {
  return (
    <Layout>
      <h1>Books</h1>
      <Carusel data={data} />
    </Layout>
  );
};

export default BooksPage;
