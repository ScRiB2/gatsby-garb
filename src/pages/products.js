import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"

const Products = ({ data: { allContentfulProduct: products } }) => {
  return (
    <Layout>
      <div>
        <h2>Garb Products</h2>
        {products.edges.map(({ node: product }) => (
          <div key={product.id}>
            <Link to={`/products/${product.slug}`} style={{ textDecoration: "none", color: "#551a8b" }}>
              <h3>{product.name} · <span style={{
                fontSize: "1.2rem",
                fontWeight: 300,
                color: "#f60"
              }}>{product.price}</span></h3>
            </Link>
            <Img
              style={{ maxWidth: 400 }}
              fluid={product.image.fluid}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulProduct {
            edges {
                node {
                    id
                    slug
                    name
                    price
                    image {
                        fluid(maxWidth: 400) {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }}
`

export default Products