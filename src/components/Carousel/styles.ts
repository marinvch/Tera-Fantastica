import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  bookInfo: {
    backgroundColor: '#f7f9fc', // Light background for readability
    padding: '15px', // Add some padding
    borderRadius: '8px', // Soft rounded corners
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px', // Adjust padding for smaller screens
    },
  },
  bookInfoText: {
    color: '#333', // Darker color for the text
    fontWeight: 500, // Medium weight for emphasis
    lineHeight: 1.6, // Improve readability
    margin: '5px 0', // Add space between each line
    '&:first-of-type': {
      fontWeight: 'bold', // Make the author's name bolder
    },
    '&::before': {
      content: '"• "', // Add a bullet point before each text
      color: '#ff5252', // Stylish color for bullets
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem', // Smaller font for mobile
    },
  },
}));
