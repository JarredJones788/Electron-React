import { Button } from '@material-ui/core';
import React from 'react';

interface IProps {
    history: any;
}

export default function Home(props: IProps) {

    return (
        <div>
            <h1>THIS IS HOMEPAGE</h1>
            <Button onClick={() => { props.history.push('/login') }}>Go To Login</Button>
        </div>
    );
}
