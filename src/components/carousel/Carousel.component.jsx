import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.styles.scss';

const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    978: { items: 5 },
}


export const CarouselProducts = ({items}) => {
    return (
        <div className="color-options-wrap">
            <AliceCarousel 
                mouseTracking
                items={items}
                responsive={responsive}
                paddingLeft={60}
                paddingRight={60}
                disableDotsControls={true}
            />
        </div>
    )
}

export const CarouselPics = ({items}) => {
    return (
        <AliceCarousel 
            mouseTracking
            items={items}
            autoPlay
            autoPlayStrategy="all"
            autoPlayInterval={4000}
            animationDuration={1500}
            infinite
        />
    )
}

