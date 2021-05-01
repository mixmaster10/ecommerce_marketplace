const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = withPlugins([[withSass(), withImages()]]);

// module.exports = {
//     env: {
//         strapi_api_key: 'http://ecom-mysql.api.bluejestic.local/products',
//     },
// };
