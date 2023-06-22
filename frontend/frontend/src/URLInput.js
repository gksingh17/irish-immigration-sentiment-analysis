import React, { useState } from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f7f7f7',
});

const useStyles = () => ({
  textField: {
    width: '300px',
  },
  button: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
  },
});

const URLInput = () => {
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (url.trim() === '') {
      setError('Please enter a URL.');
    } else if (!isValidUrl(url)) {
      setError('Please enter a valid URL.');
    } else {
      // Handle the valid URL submission
      console.log('Submitted URL:', url);
    }
  };

  const isValidUrl = (url) => {
    // Regex pattern for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  return (
    <RootContainer>
      <TextField
        label="Enter a URL"
        variant="outlined"
        size="medium"
        className={classes.textField}
        value={url}
        onChange={handleInputChange}
        error={!!error}
        helperText={error}
        inputProps={{ style: { textAlign: 'center' } }}
      />
      <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
        Submit
      </Button>
    </RootContainer>
  );
};

export default URLInput;