import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    OutlinedInput,
    Button,
    createTheme,
    ThemeProvider,
  } from '@mui/material';
  import { useEffect } from 'react';
  
  const theme = createTheme({
    palette: {
      primary: { main: '#a7c957' },
      secondary: { main: '#f2e94e' },
      text: { primary: '#333' },
      background: { default: '#f8f9fa' },
    },
    components: {
      MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 8 } } },
      MuiSelect: { styleOverrides: { root: { borderRadius: 8 } } },
      MuiChip: { styleOverrides: { root: { borderRadius: 10, backgroundColor: '#e0f7fa', color: '#00acc1' } } },
      MuiInputLabel: { styleOverrides: { root: { color: '#757575', '&.Mui-focused': { color: '#a7c957' } } } },
      MuiFormControl: { styleOverrides: { root: { '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#a7c957' } } } },
      MuiButton: { styleOverrides: { root: { borderRadius: 8, fontWeight: 600, '&:hover': { backgroundColor: '#c8e6c9' } } } },
    },
  });
  
  function Filters({ activities, filters, setFilters }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleMultiSelectChange = (e) => {
      const { name, value } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: typeof value === 'string' ? value.split(',') : value,
      }));
    };
  
    const handleResetFilters = () => {
      setFilters({ age: '', time: '', materials: [], category: [] });
    };
  
    const getFilteredActivitiesForOptions = () => {
      return activities.filter((activity) => {
        const matchesAge = filters.age ? activity.age === filters.age : true;
        const matchesTime = filters.time ? activity.time === filters.time : true;
        return matchesAge && matchesTime;
      });
    };
  
    const getUniqueValues = (array, key) => {
      const values = array.flatMap((item) => item[key] || []);
      return [...new Set(values)].sort();
    };
  
    const filteredActivitiesForOptions = getFilteredActivitiesForOptions();
  
    const ageOptions = getUniqueValues(activities, 'age');
    const timeOptions = getUniqueValues(activities, 'time');
    const materialOptions = getUniqueValues(filteredActivitiesForOptions, 'materials');
    const categoryOptions = getUniqueValues(filteredActivitiesForOptions, 'category');
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 4, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
            {/* Età */}
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Età</InputLabel>
              <Select
                name="age"
                value={filters.age}
                onChange={handleChange}
                label="Età"
              >
                <MenuItem value="">Tutte</MenuItem>
                {ageOptions.map((age) => (
                  <MenuItem key={age} value={age}>
                    {age}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            {/* Tempo */}
            <FormControl sx={{ minWidth: 180 }}>
              <InputLabel>Tempo</InputLabel>
              <Select
                name="time"
                value={filters.time}
                onChange={handleChange}
                label="Tempo"
              >
                <MenuItem value="">Tutti</MenuItem>
                {timeOptions.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            {/* Materiali */}
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Materiali</InputLabel>
              <Select
                name="materials"
                multiple
                value={filters.materials}
                onChange={handleMultiSelectChange}
                input={<OutlinedInput label="Materiali" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {materialOptions.map((material) => (
                  <MenuItem key={material} value={material}>
                    {material}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            {/* Categoria */}
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Categoria</InputLabel>
              <Select
                name="category"
                multiple
                value={filters.category}
                onChange={handleMultiSelectChange}
                input={<OutlinedInput label="Categoria" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {categoryOptions.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
  
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button onClick={handleResetFilters} variant="outlined">
              Reset Filtri
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
  
  export default Filters;
  