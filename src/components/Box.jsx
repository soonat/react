import { useState } from 'react';
import './Box.css';

function Box() {
  const [color, setColor] = useState('red');

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;
    setColor(randomColor);
  };

  return (
    <div
      className="box"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  );
}
export default Box;