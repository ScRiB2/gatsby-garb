import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          allFile {
              edges {
                  node {
                      id
                      relativePath
                      size
                      extension
                      birthTime
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <h1>Hello from Page 3</h1>

      <h3>Image File Data</h3>

      <table>
        <thead>
        <tr>
          <th>Relative Path</th>
          <th>Size of Image</th>
          <th>Extension</th>
          <th>Birthtime</th>
        </tr>
        </thead>
        <tbody>
        {data.allFile.edges.map(({node}) => (
          <tr key={node.id}>
            <td>{node.relativePath}</td>
            <td>{node.size}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
          </tr>
        ))}
        </tbody>

      </table>

      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}
