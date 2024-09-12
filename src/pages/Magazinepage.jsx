import Layout from '../components/Layout';
import Carousel from 'components/Carousel';
import data from '../data/magazines/magazines.json';
import { useSearchAndFilter } from '../utils/hooks';
import SearchBar from '../components/Searchbar';
import AlphabetFilter from '../components/AlphabetFilter';

const MagazinesPage = () => {
  const { filteredData, handleSearch, handleFilter } = useSearchAndFilter(data);

  return (
    <Layout>
      <h1>Magazines</h1>
      <SearchBar onSearch={handleSearch} />
      <AlphabetFilter onFilter={handleFilter} />
      <Carousel data={filteredData} />
    </Layout>
  );
};

export default MagazinesPage;
