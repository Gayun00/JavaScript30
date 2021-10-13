import React from 'react';

const PreviewForm = ({card}) => (
  <>
    <div>{card.name}</div>
    <div>{card.age}</div>
  </>
  );

export default PreviewForm;