import React from 'react';
import { useState,useEffect } from 'react';
import DogList from './components/DogList';
import SelectBreed from './components/SelectBreed';
import './App.scss';

export const App: React.FC = () => {
  const [breeds, setBreeds] = useState({})
  const [selectBreed, setSelectBreed] = useState('')

  useEffect(() => {
    fetchBreeds()
  },[])

  const fetchBreeds = async() => {
    await fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
      setBreeds(json.message)
      setSelectBreed(Object.keys(json.message)[Math.floor(Math.random() * Object.keys(json.message).length)])
    });
  }

  return (
    <>
    <header className='flex justify-between items-center m-3'>
      <h1 className='text-3xl inline-block text-white p-1 pl-5 pr-5'>{selectBreed}</h1>
      <SelectBreed breeds={breeds} selectBreed={selectBreed} setSelectBreed={setSelectBreed} />
    </header>
    
    <DogList selectBreed={selectBreed} setSelectBreed={setSelectBreed} />    
    </>
  )
}
export default App