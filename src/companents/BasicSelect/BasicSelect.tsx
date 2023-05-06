import './BasicSelect.css';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import en from '@/assets/image/en.svg';

export default function BasicSelect() {
  const [country, setCountry] = useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  return (
    <Box>
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={handleChange}
        >
          <MenuItem value={'en'}>
            <img src={en} alt="" />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
