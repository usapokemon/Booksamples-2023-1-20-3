import React from 'react';
import { Message } from './Message';

export default function TextList({number}) {

    //let number = props.number;
    let textArray = [];

    for (let i = number; i > 0; i--) {
        textArray.push(<Message textstring={`This is a test - ${i}`} />
        );
    }

    return (
        <div className="bg-info text-white text-center p-2 m-2">
            {textArray}
        </div>
    )

}