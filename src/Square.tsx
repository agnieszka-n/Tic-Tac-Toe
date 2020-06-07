import React from 'react';

interface Props {
  onClick: () => void,
  value: string|null
}

export function Square(props: Props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
