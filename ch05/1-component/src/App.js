import './App.css';
import React from 'react';
import Message from "./Message";

export default function App() {
    console.log('  * Message - before return');
    return (
       <div>
        <Message />
        <Message />
       </div>
    )
 
}
