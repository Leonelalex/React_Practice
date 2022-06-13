import React, {useState,useEffect} from 'react';
import GiftGridItem from './GiftGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

  const{data, loading} = useFetchGifs(category);

  return (
      <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className='cardGrid'>
                { 
                    data.map(img => {
                        return <GiftGridItem key={img.id} {...img} />
                    })
                }

        </div>
    </>
  )
}

export default GifGrid;
