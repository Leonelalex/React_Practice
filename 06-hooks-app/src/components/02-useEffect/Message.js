import React, {useEffect, useState} from 'react';

export const Message = () => {

    const [cords, setcords] = useState({x: 0, y: 0});

    const {x, y} = cords;

    useEffect(() => {
      
        const mouseMove = (e) =>{
            setcords({x: e.x, y: e.y});
        };

        window.addEventListener('mousemove', mouseMove);
    
      return () => {
        window.removeEventListener('mousemove', mouseMove);
      }
    }, [])
    

  return (
    <div>
        <h3>X: {x} , Y: {y}</h3>
    </div>
  )
}
