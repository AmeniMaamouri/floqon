/** @type {import('next').NextConfig} */
const path = require('path')


module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// Ignore  Error ESLint 
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};