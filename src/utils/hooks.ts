import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useIsDesktop = (): boolean => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return isDesktop;
};

export const useSearchAndFilter = (initialData: any[]) => {
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = initialData.filter(
      (item: {
        text: {
          name: string;
          author: string;
          Pages: { toString: () => string | any[] };
          Year: { toString: () => string | any[] };
          Format: string;
        };
      }) =>
        item.text.name.toLowerCase().includes(lowerCaseQuery) ||
        item.text.author.toLowerCase().includes(lowerCaseQuery) ||
        item.text.Pages.toString().includes(lowerCaseQuery) ||
        item.text.Year.toString().includes(lowerCaseQuery) ||
        item.text.Format.toLowerCase().includes(lowerCaseQuery),
    );
    setFilteredData(filtered);
  };

  const handleFilter = (letter: string) => {
    const filtered = initialData.filter((item: { text: { name: string } }) => item.text.name.startsWith(letter));
    setFilteredData(filtered);
  };

  return { filteredData, handleSearch, handleFilter };
};
