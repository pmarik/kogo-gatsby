import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout.component'
import Tile from '../components/tile/Tile.component';
import SEO from '../components/Seo.component';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.component';
import "./shop-page.styles.scss";

export const ShopPageTemplate = ({ title, subheading, products }) => {

  // Used to add additional text info to product thumbnail pics
  const imgText = ['x3', 'x10', 'x30', '']

  const description = "Pick from our family of products that focus on sustainability and clean energy."

  return (
    <section>
        <SEO 
          title="Shop" 
          description={description} 
          thumbnailImage="/img/ogKogoShop.jpg" 
          addedKeywords="shop kogo" 
          url="https://www.kogofoods.com/shop/"
        />
 
        <Breadcrumbs links={[`shop`]} />
        
        <div className="shop-grid">
                {products.map((product, index )=> (
                  <Tile
                    key={product.handle}
                    slug={product.handle}
                    title={product.title}
                    priceRange={product.priceRange}
                    image={product.images[0].localFile.childImageSharp.fluid}
                    variants={product.variants}
                    imgText={imgText[index]}
                  />
                ))}
          </div>

        <div className="shop-header">
          <div className="text-wrap">
            <h1 style={{color: '#fafafa'}} className="alt-h1">{title}</h1>
            <p>{subheading}</p>
          </div>
          <div className="background-shop-img"></div>
        </div>
          
    </section>
  )
}

ShopPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const ShopPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { allShopifyProduct: { nodes: products } } = data

  return (
    <Layout>
      <ShopPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        products={products}
      />
    </Layout>
  )
}

ShopPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShopPage

export const shopPageQuery = graphql`
  query ShopPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subheading
      }
    }
    allShopifyProduct(sort: {fields: id}) {
        nodes {
          title
          handle
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 290) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          variants {
            price
            selectedOptions {
              name
              value
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
  }
`

/** add 'compareAtPrice' to query if wanting to show discount price, added to tile component */
// variants {
//   compareAtPrice
//   price
//   selectedOptions {
//     name
//     value
//   }
// }