import React from 'react';
import { useState,useEffect } from 'react';

type Props = {
  selectBreed: string,
  setSelectBreed: func
};
export const DogList: React.FC<Props> = (props) => {
  const [breeds, setBreeds] = useState([])
  // const [selectBreed, setSelectBreed] = useState('affenpinscher')
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
      setBreeds(json.message)
    });
  },[])

  const listItems = Object.keys(breeds).map((key) =>
    <option value={key} key={key}>{key}</option>
  );

  const handleSelectChange = (e) => {
    props.setSelectBreed(e.target.value)
  }

  const handleClick = async () => {
    const result = await fetch('https://dog.ceo/api/breed/' + props.selectBreed + '/images/random/10');
    result.json().then(json => setDogs(json.message));
  }

  const imgList = dogs.map((value) =>
    <li key={value}><img src={value} alt="" /></li>
  );

  return <>
    <p>select dog!</p>
    <select name="breeds" id="breeds" onChange={handleSelectChange}>
    {listItems}
    </select>
    <button onClick={handleClick}>表示</button>
    
    <ul id="dogs">
      {imgList.length>0?imgList:''}
    </ul>
  </>
}

export default DogList
