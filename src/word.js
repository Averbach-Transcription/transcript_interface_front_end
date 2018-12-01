import React, { Fragment } from 'react';
import { CONFIDENCE_THRESHOLD } from './config';
import './App.css'


const Word = props => {

    let { word, selected, firstSelectedWordIndex } = props

    let style = {};
    let className = 'word'

    if (word.changed) {
        style = { backgroundColor: '#DDD' }
    }

    if (selected) {
        style = { color: 'blue', fontStyle: 'bold', backgroundColor: 'gray' }
    }

    if (word.confidence <= CONFIDENCE_THRESHOLD) {
        className += ' thin-underline'
    }

    const space = " "

    const onClick = () => props.onClick(word)

    const renderSpace = () => {
        if (word.index === firstSelectedWordIndex || word.changed) {
            return <span onClick={onClick}>{space}</span>
        } else {
            return <span onClick={onClick} style={style}>{space}</span>
        }
    }

    return (
        <Fragment>
            {renderSpace()}
            <span
                onClick={onClick}
                className={className}
                style={style}>{word.puncBefore ? word.puncBefore.join('') : ''}{word.word}{word.puncAfter ? word.puncAfter.join('') : ''}
            </span>

        </Fragment>
    )
}

export default Word;