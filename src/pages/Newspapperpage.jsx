import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';

const NewspaperPage = () => {
  return (
    <Layout>
      <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Newspapper</Typography>
      </Grid>
    </Layout>
  );
};

export default NewspaperPage;
