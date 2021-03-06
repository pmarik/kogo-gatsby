import React from 'react'
import './sectionIcons.styles.scss';

import Cherries from '../../images/cherries.inline.svg';
import Globe from '../../images/globe.inline.svg';
import Cup from '../../images/cup.inline.svg'

const SectionIcons = () => { 
    return (
        <section className={`section-container`}>
                  <div className="section-icons">
                    <div className="section-icon-wrap">
                      <div className="icon-div">
                        <Cherries className="section-icon"/>
                      </div>
                      <h3>Natural</h3>
                      <p>100% natural coffee cherries</p>
                    </div>

                    <div className="section-icon-wrap">
                      <div className="icon-div">
                        <Globe className="section-icon"/>
                      </div>
                      <h3>Feel Good</h3>
                      <p>Help support the world</p>
                    </div>

                    <div className="section-icon-wrap sizes-icon">
                      <div className="icon-div">
                       <Cup className="section-icon" />
                      </div>
                      <h3>Power Up</h3>
                      <p>Natural energy without the crash</p>
                    </div>
                    
                  </div>
            </section>
    )
}

export default SectionIcons;