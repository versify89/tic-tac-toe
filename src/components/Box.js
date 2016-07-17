import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Box = (props) => (
    <Button onClick={() => props.onClick(props.boxId)}>{props.text}</Button>
);

export default Box;