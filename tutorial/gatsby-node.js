const path = require('path');
// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `);
  response.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/components/templates/product-template.js`),
      context: {
        slug: product.slug,
      },
    });
  });
};
