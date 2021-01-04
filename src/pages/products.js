import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data;
  console.log(products);
  return (
    <Layout>
      <section className="images">
        {products.map(product => {
          return (
            <article className="card" key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h4>{product.title}</h4>
              <span>${product.price}</span>
              <Link to={`/products/${product.slug}`}>Details</Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default ComponentName;
