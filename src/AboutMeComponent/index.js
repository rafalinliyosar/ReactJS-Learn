import React from 'react';

export default function AboutMeComponent(props) {
    console.log(props.name)
    return (<div>
        I am {props.name}
    </div>);
}
