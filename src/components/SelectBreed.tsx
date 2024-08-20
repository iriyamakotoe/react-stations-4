import React from 'react';
import { useEffect } from 'react';

type Props = {
    breeds: object,
    selectBreed: string,
    setSelectBreed: () => void
};
export const SelectBreed: React.FC<Props> = (props) => {
    useEffect(() => {
        console.log(props.selectBreed)
    },[props.selectBreed])

  const handleSelectChange = (e) => {
    props.setSelectBreed(e.target.value)
  }

  return <>
    <div>select dog!
    <select name="breeds" id="breeds" value={ props.selectBreed } onChange={handleSelectChange} className='p-1 ml-3'>
    {Object.keys(props.breeds).map((key) => (
        <option value={key} key={key}>{key}</option>
    ))}
    </select>
    </div>
  </>
}

export default SelectBreed
