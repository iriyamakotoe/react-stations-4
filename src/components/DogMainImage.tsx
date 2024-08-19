import React from 'react';
import { useState,useEffect } from 'react';

type Props = {
  selectBreed: string,
  setSelectBreed: func
};
export const DogMainImage: React.FC<Props> = (props) => {
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    fetchMainImage()
  },[])

  const handleClick = () => {
    fetchMainImage()
  }

  const fetchMainImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
      const dog = json.message.split('/')
      setMainImage(json.message)
      props.setSelectBreed(dog[4])
    });
  }

  return <>
    <p className='text-center'><img src={mainImage} className='inline-block w-full' /></p> 
    <button onClick={handleClick}>更新</button>
  </>
}

export default DogMainImage
