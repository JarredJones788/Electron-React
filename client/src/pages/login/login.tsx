import Button from '@material-ui/core/Button';
import React from 'react';

interface IProps {
  history: any;
}

export default function Login(props: IProps) {

  return (
    <div>
      <h1>THIS IS LOGIN</h1>
      <Button onClick={() => { props.history.push('/') }}>Go To Home</Button>
    </div>
  );
}
