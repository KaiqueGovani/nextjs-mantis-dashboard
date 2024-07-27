/** @type {import('next').NextConfig} */

module.exports = {
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  transpilePackages: ['react-syntax-highlighter'],
  env: {
    REACT_APP_VERSION: '1.25.0000'
  }
};
