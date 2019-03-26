import React from 'react';

import { Button } from 'semantic-ui-react';
const LeftArrow = (props) => {
  return (
    <Button onClick={props.goToPrevSlide}>
        <span>&lt;</span>
    </Button>
  );
}

export default LeftArrow;
