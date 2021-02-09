import React from 'react';
import { ButtonLink } from '../buttons/Button.component'
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby'
//import './bulkBanner.styles.scss';
import './bulkBanner1.styles.scss'

const BulkBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            bulkImg: file(relativePath: {eq: "applecore-bulk-orders.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 80){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    // return (
    //     <div className="shop-bulk">
    //         <h2 style={{color: '#fafafa'}}>Wholesale</h2>
    //         <p>Looking to add applecores to your store? Contact us for bulk and retail orders and we will shake a few more off the tree for you. </p>
    //         <ButtonLink toLink={`/wholesale`}>
    //             <span>Bulk Orders</span>
    //         </ButtonLink>
    //     </div>
    // )

    return (
        <div className="shop-bulk">
            <div className="bulk-banner-text">
                <h2 style={{color: '#fafafa'}}>Wholesale</h2>
                <p>Looking to add applecores to your store? Contact us for bulk and retail orders and we will shake a few more off the tree for you. </p>
                <ButtonLink toLink={`/wholesale/`} className="bulk-banner-btn">
                    <span>Bulk Orders</span>
                </ButtonLink>
            </div>
            <div className="bulk-banner-img">
                <Img fluid={data.bulkImg.childImageSharp.fluid} alt="bulk applecore orders" />
            </div>
        </div>
    )
}

export default BulkBanner;