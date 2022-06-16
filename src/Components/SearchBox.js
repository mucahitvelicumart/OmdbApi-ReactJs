import React, { useContext, useState } from 'react'
import icon from '../Images/search.svg'
import '../assets/SearchBox.css'
import Select from 'react-select'
import SearchUrlContext from '../Context/SearchUrlContext';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Movie', label: 'Movie' },
  { value: 'Series', label: 'Series' },
  { value: 'Game', label: 'Game' }
]

const SearchBox = () => {
  const [searchedName, setSearchedName] = useState("")
  const [searchedType, setSearchedType] = useState("All")
  const [searchedYear, setSearchedYear] = useState("")
  // eslint-disable-next-line
  const { searchUrl, setSearchUrl } = useContext(SearchUrlContext)

  const handleChangeName = (e) => {
    setSearchedName(e.target.value)
  }
  const handleChangeType = (e) => {
    setSearchedType(e.value)
  }
  const handleChangeYear = (e) => {
    
    setSearchedYear(e.target.value)
  }
 
  const handleChangeUrl = () => {
    if (searchedName === "") {
      setSearchUrl("s=Pokemon")
    }
    else if (searchedType === "All") {
      setSearchUrl("s=" + searchedName)
    }
    else if (searchedYear.length >3){
      setSearchUrl("s=" + searchedName + "&type=" + searchedType + "&y="+searchedYear)
    }
    else {
      setSearchUrl("s=" + searchedName + "&type=" + searchedType)
    }
  }
  
  return (
    <>
      <div className='year-bar'>
        <input
          className='year-input'
          type="number"
          min={1900}
          max={2022}
          placeholder={'Tarih seçiniz...'}
          onChange={handleChangeYear}></input>
      </div>
      <Select
        className={'select-bar'}
        defaultValue={{ label: "All", value: "All" }}
        options={options}
        onChange={handleChangeType}
      >

      </Select>
      <div className={'search-wrapper'}>

        <input
          onChange={handleChangeName}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleChangeUrl()
            }
          }}
          id={'search-input'}
          type="text"
          className={'search-input'}
          placeholder={'Aradığınız filmi yazınız...'} />
        <span
          className="prefix"
          type="submit">
          <img alt={'search-icon'} src={icon} onClick={handleChangeUrl} />
        </span>
      </div>
    </>
  )
}


export default SearchBox