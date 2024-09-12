import Layout from '../components/Layout';
import Carusel from '../components/Carousel';
import data from '../data/books/books.json';
import { useSearchAndFilter } from '../utils/hooks';
import SearchBar from '../components/Searchbar';
import AlphabetFilter from '../components/AlphabetFilter';

const BooksPage = () => {
  const { filteredData, handleSearch, handleFilter } = useSearchAndFilter(data);
  return (
    <Layout>
      <h1>Books</h1>
      <SearchBar onSearch={handleSearch} />
      <AlphabetFilter onFilter={handleFilter} />
      <Carusel data={filteredData} />
    </Layout>
  );
};

export default BooksPage;
