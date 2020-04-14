import React from 'react';
import Stem from '../../assets/stemGrow.svg';
import Leaf1 from '../../assets/leaf1.min.svg';
import Leaf2 from '../../assets/leaf2.min.svg';
import Leaf3 from '../../assets/leaf3.min.svg';
import Leaf4 from '../../assets/leaf4.min.svg';
import Leaf5 from '../../assets/leaf5.min.svg';
import Leaf6 from '../../assets/leaf6.min.svg';
import Leaf7 from '../../assets/leaf7.min.svg';
import Leaf8 from '../../assets/leaf8.min.svg';
import Leaf9 from '../../assets/leaf9.min.svg';

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
                           <Leaf3 className={`${isVisible ? "leaf2_3" : ""} stem2_leaf` }/>
                           <Leaf4 className={`${isVisible ? "leaf2_4" : ""} stem2_leaf` }/>
                           <Leaf5 className={`${isVisible ? "leaf2_5" : ""} stem2_leaf` }/>
                           <Leaf6 className={`${isVisible ? "leaf2_6" : ""} stem2_leaf` }/>
                           <Leaf7 className={`${isVisible ? "leaf2_7" : ""} stem2_leaf` }/>
                           <Leaf8 className={`${isVisible ? "leaf2_8" : ""} stem2_leaf` }/>
                           <Leaf9 className={`${isVisible ? "leaf2_9" : ""} stem2_leaf` }/>

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