import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import img from '../images/px-1.jpg';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "px-2.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "px-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);
  return (
    <section className="images">
      <article className="card">
        <h4>Basic image</h4>
        <img src={img} width="100%" alt="pexels" />
      </article>

      <article className="card">
        <h4>Fixed image/ blur</h4>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>

      <article className="card">
        <h4>Fluid image/ blur</h4>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  );
};

export default Images;
