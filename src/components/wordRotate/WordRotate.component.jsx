import React from 'react';
import TextLoop from 'react-text-loop';
import './wordRotate.styles.scss';

const WordRotate = ({ wordList, interval }) => {

    const animatingWords = wordList.map(word => (
        <p className="word-rotated">{word}</p>
    ))

    return (
        <section className="word-rotate">
            <div className="word-rotate-inner">
                <h2>Kogo for...</h2>
                <div className="loop-wrap">
                    <TextLoop
                        interval={interval}
                    >
                        {animatingWords}
                    </TextLoop>
                </div>
            </div> 
        </section>
    )
} 

export default WordRotate;