import React, { Fragment } from 'react';



const Word = props => {

    const onClick = () => {
        props.onClick(props.word)
    }

    let style = props.currentlyPlaying
        ? { color: 'blue', fontStyle: 'bold', backgroundColor: 'gray' }
        : {}

    if (props.word.confidence <= props.confidenceThreshold && props.word.word !== '.') {
        style = Object.assign(style, { textDecoration: 'underline' })
    }

    return (
        <Fragment>
            <span>{['.', ','].includes(props.word.word) ? '' : ' '}</span>
            <span
                onClick={onClick}
                style={style}>{props.word.word}</span>

        </Fragment>
    )
}

export default Word;