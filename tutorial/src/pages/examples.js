import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';

const examples = ({ data }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = data;
  return (
    <Layout>
      <div>
        <h4>Hello there from examples</h4>
        <Header />
        <HeaderStatic />
        <p>Author: {author}</p>
      </div>
    </Layout>
  );
};
export const data = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        data
        person {
          age
          name
        }
        description
        title
      }
    }
  }
`;
export default examples;
