import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import netlifyIdentity from 'netlify-identity-widget'

import gatsbyIcon from "../images/gatsby-icon.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props}/>

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init()
  }


  render() {
    const { siteTitle } = this.props
    return (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
          }}
        >
      <span style={{ display: "flex", alignItems: "center" }}>
        <img src={gatsbyIcon} alt="logo" style={{
          width: 50,
          margin: "0 5px",
          border: "3px solid orange",
          borderRadius: "50%"
        }}/>
        <h1 style={{ margin: 0 }}>
          <NavLink to="/">{siteTitle}</NavLink>
        </h1>
      </span>

          <NavLink to="/blog">Blog</NavLink>

          <NavLink to="/products">Store</NavLink>

          <div data-netlify-identity-menu/>

          <div className="snipcart-summary snipcart-checkout" style={{ color: "white", cursor: "pointer" }}>
            <div><strong>My Cart</strong></div>
            <div><span style={{ fontWeight: "bold" }} className="snipcart-total-items"/> Items in Cart</div>
            <div>Total price <span style={{ fontWeight: "bold" }} className="snipcart-total-price"/></div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
