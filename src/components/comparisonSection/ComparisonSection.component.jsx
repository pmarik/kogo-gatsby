import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import { ButtonLink } from '../buttons/Button.component';
import './comparisonSection.styles.scss'

const ComparisonSection = ({ mainTangled, mainOrganized }) => {
    return(
        <section style={{marginTop: '0' }} className={`section-container anim-graphic2-start`}>
            <div className="section2-grid">

                <div className="section2-copy">
                    <h2>Take control of messy wires</h2>
                    <p>Untangle your cables on your desks and tables. Applecore helps wrap your cords and wires to reduce clutter and <span className="accent">avoid tangled messes.</span> </p>
                </div> 

                <div className="main-tangled">
                <PreviewCompatibleImage 
                    imageInfo={{
                        image: mainTangled,
                        alt: 'Main tangled wires without Applecores',
                    }}
                />
                </div>

                <div className="main-organized">
                <PreviewCompatibleImage 
                    imageInfo={{
                        image: mainOrganized,
                        alt: 'Main organized wires with Applecores',
                    }}
                />
                </div>

                <div className={`section2-copy-cta `}> 
                <h2>Easy wire management</h2>
                <p>Applecores are easy to use and <span className="accent">gentle on your cables.</span> It is the secure and practical solution to your cord management needs.</p>
                
                <ButtonLink  toLink={`/shop/`} className={`section2-btn`}>
                    <span>Get Organized</span>
                </ButtonLink>  
                </div>
            </div>
        </section>
    )
}

export default ComparisonSection;