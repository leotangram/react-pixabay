import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import ImagesList from './components/ImagesList'

function App() {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => {
    const consultApi = async () => {
      if (search === '') return
      const imagesPerPage = 30
      const key = '12813467-683621e872020913560670ca9'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`

      // ---- CON AXIOS
      // const result = await axios.get(url)
      // console.log(result.data)

      // --- CON FECTH
      const response = await fetch(url)
      const result = await response.json()
      console.log(result)

      setImages(resul.hits)
    }
    consultApi()
  }, [search])
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Search setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImagesList images={images} />
      </div>
    </div>
  )
}

export default App
