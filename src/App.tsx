import React from 'react';
import { useState,useEffect } from 'react';
import DogMainImage from './components/DogMainImage';
import DogList from './components/DogList';
import './App.scss';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [selectBreed, setSelectBreed] = useState('affenpinscher')
  return (
    <>
    <DogMainImage selectBreed={selectBreed} setSelectBreed={setSelectBreed} />
    <DogList selectBreed={selectBreed} setSelectBreed={setSelectBreed} />
    </>
  )
}
export default App