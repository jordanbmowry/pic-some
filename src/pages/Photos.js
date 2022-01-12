import React, { useContext } from 'react';
import { Context } from '../context';
import Image from '../components/Image';
import getClass from '../utils/getClass';

function Photos() {
  const { allPhotos } = useContext(Context);

  const photos = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className={getClass(index)} />
  ));
  return (
    <main className='photos'>
      <h1>Images go here</h1>
      {photos}
    </main>
  );
}

export default Photos;
