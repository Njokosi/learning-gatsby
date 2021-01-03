import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import img from '../images/px-1.jpg'

const Images = () => {
    return (
        <section className="images">
            <article className="card">
                <h4>Basic image</h4>
            </article>

            <article className="card">
                <h4>Fixed image/ blur</h4>
            </article>

            <article className="card">
                <h4>Fluid image/ blur</h4>
            </article>

        </section>
    )
}

export default Images
