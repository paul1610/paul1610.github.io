import React from 'react';
import '../style/style.css';
import '../style/home.css';
import Text from './Text';
import Qualitfications from './Qualifications';

export default function Home() {
    return (<div className='center'>
        <Text />
        <Qualitfications />
    </div>);
}
