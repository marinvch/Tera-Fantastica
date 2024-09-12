import React from 'react';

const BulgarianAlphabets = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ь',
  'Ю',
  'Я',
];

interface AlphabetFilterProps {
  onFilter: (letter: string) => void;
}

const AlphabetFilter: React.FC<AlphabetFilterProps> = ({ onFilter }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {BulgarianAlphabets.map((letter) => (
        <button key={letter} onClick={() => onFilter(letter)} style={{ margin: '5px', padding: '10px' }}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetFilter;
