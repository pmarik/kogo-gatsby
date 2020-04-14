import React from 'react';
import Stem from '../../assets/stemGrow.svg';
import Leaf1 from '../../assets/leaf1.min.svg';
import Leaf2 from '../../assets/leaf2.min.svg';
import './coffeestem.styles.scss';
import VisibilitySensor from '../VisibilitySensor';



const CoffeeStem = () => {



   return (
         <VisibilitySensor
            once 
            partialVisibility
            minTopValue="50">
               {({ isVisible }) => (
               <div class="drawing2" id="stem2">
                           <Leaf1 className={`${isVisible ? "leaf2_1" : ""} stem2_leaf` } />
                           <Leaf2 className={`${isVisible ? "leaf2_2" : ""} stem2_leaf` }/>
                           <Stem 
                              style={{
                                 visibility: `${isVisible ? 'visible' : 'hidden'}`
                              }}
                              className={`${isVisible ? "theOverlay" : ''} svgContain`}
                           />
               </div>
               )}
         </VisibilitySensor>
      )
}


export default CoffeeStem;