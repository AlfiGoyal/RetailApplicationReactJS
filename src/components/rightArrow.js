import React from 'react';

import { Button } from 'semantic-ui-react';
const RightArrow = (props) => {
  return (
    <Button onClick={props.goToNextSlide}>
        <span>&gt;</span>
    </Button>
  );
}

export default RightArrow;