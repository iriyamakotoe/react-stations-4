import React from 'react';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  selectBreed: string,
  setSelectBreed: (value: string) => void
};
export const DogList: React.FC<Props> = (props) => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetchDogImage()
  },[props.selectBreed])

  const fetchDogImage = async () => {
    if(props.selectBreed) {
      await fetch('https://dog.ceo/api/breed/' + props.selectBreed + '/images/random/10')
      .then(res => res.json())
      .then(json => {
        setDogs(json.message)
      })
      .catch(err =>
        console.log(err)
      )
    }
  }

  return <>
      <Swiper
        navigation={true} 
        modules={[Navigation]}
        slidesPerView={dogs.length<3?dogs.length:3}
      >
        {dogs.map((value) => (
          <SwiperSlide key={value}>
            <img src={value} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
  </>
}

export default DogList
