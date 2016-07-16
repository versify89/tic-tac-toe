import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const Box = ({onClick, text}) => (
    <Button onClick={onClick}>{text}</Button>
);

export default Box;