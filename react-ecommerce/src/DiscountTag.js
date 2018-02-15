import React from 'react';
import './DiscountTag.css';

export default function DiscountTag(props) {
  const classes = [props.className, 'discount-tag'];

  console.log('rendering DiscountTag', props.discount);
  return props.discount ? <div className={classes.join(' ')}>
    {(props.discount * 100) + '%'}
  </div> : null;
}
