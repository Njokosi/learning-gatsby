import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
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

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData);

  return (
    <div>
      <p>Title : {title} </p>
      <p>Name : {name} </p>
    </div>
  );
};

export default Header;
