import React  from 'react';
import { Message} from './Message';

export default function NameList(props){

    let name = props.name;
    
    return (
        <div className="bg-info text-white text-center p-2 m-2">
            <Message name={name}/>
        </div>
    )
    
}