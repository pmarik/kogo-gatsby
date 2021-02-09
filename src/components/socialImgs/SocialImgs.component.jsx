import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import './socialImgs.styles.scss';

const SocialImgs = ({ socialHeader, socialText, socialData }) => {
    return(
            <section className={`section-container social-imgs`}>
                 <div>
                   <h2>The Kogo Journey</h2>
                   <p>Follow us @kogofoods to see the progress of our sustainability movement</p>
                 </div>
                 <div className="social-img-flex">
                 <div>
                      <div className="social-img">
                          <PreviewCompatibleImage 
                              imageInfo={{
                                  image: socialData[0].socialImg,
                                  alt: socialData[0].alt,
                              }}
                          />
                          <a href={`${socialData[0].link}`} target='_blank' rel="noreferrer" aria-label="View Instagram picture in new tab"><span className="social-text">Instagram Picture @my.applecore</span></a>
                      </div>
                      <div className="social-img">
                          <PreviewCompatibleImage 
                              imageInfo={{
                                image: socialData[1].socialImg,
                                alt: socialData[1].alt,
                              }}
                          />
                         <a href={`${socialData[1].link}`} target='_blank' rel="noreferrer" aria-label="View Instagram picture in new tab"><span className="social-text">Instagram Picture @my.applecore</span></a>
                      </div>
                   </div>
                   <div>
                      <div className="social-img">
                          <PreviewCompatibleImage 
                              imageInfo={{
                                image: socialData[2].socialImg,
                                alt: socialData[2].alt,
                              }}
                          />
                         <a href={`${socialData[2].link}`} target='_blank' rel="noreferrer" aria-label="View Instagram picture in new tab"><span className="social-text">Instagram Picture @my.applecore</span></a>
                      </div>
                      <div className="social-img">
                          <PreviewCompatibleImage 
                              imageInfo={{
                                image: socialData[3].socialImg,
                                alt: socialData[3].alt,
                              }}
                          />
                          <a href={`${socialData[3].link}`} target='_blank' rel="noreferrer" aria-label="View Instagram picture in new tab"><span className="social-text">Instagram Picture @my.applecore</span></a>
                      </div>
                   </div>  
                 </div>
            </section>
    )
}

export default SocialImgs