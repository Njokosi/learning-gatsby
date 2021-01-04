import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ComponentName = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
);

export default ComponentName;
