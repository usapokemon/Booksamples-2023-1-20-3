import React from 'react';

export default function TextDisplay({ text }) {
    console.log(`inside TextDisplay -- pass--${text} `);
    return (
        <h2 className="bg-primary text-white text-center p-2 m-2">
            You just entered: {text}
        </h2>
    )
}