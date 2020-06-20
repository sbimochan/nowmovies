import React from 'react';
import Dashboard from 'components/Dashboard';
import { Link, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
function App() {
  return (
    <Box>
      <Box className="container-wrap">
        <Dashboard />
      </Box>
      <footer className="page-footer">
        <Link
          href="https://github.com/sbimochan"
          target="_blank"
          rel="noopener noreferrer"
          variant="body2"
          style={{ marginRight: 16, color: '#0e0e0c' }}
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          href="https://instagram.com/sbimochan"
          target="_blank"
          rel="noopener noreferrer"
          variant="body2"
          style={{ color: '#0e0e0c' }}
        >
          <InstagramIcon fontSize="large" />
        </Link>
      </footer>
    </Box>
  );
}

export default App;
