import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../layout';

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <Link to="/products">View Products</Link>
        <h1>{title}</h1>
      </div>
      <section
        className="card"
        style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: "4px"}}
      >
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <h4>{title}</h4>
        <p>${price}</p>
        <p style={{textAlign: "left"}}>{info}</p>
        <button>ADD TO CART</button>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`;

export default ComponentName;
