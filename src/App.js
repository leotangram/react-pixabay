import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import ImagesList from './components/ImagesList'

function App() {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

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

      setImages(result.hits)

      // Calcular el total de páginas
      const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage)
      setTotalPages(calculateTotalPages)
    }
    consultApi()
  }, [search])

  const previousPage = () => {
    let newActualPage = actualPage - 1
    // Colocarlo en el state
    setActualPage(newActualPage)
  }

  const nextPage = () => {
    let newActualPage = actualPage + 1
    setActualPage(newActualPage)
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>
        <Search setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ImagesList images={images} />
        {actualPage === 1 ? null : (
          <button
            onClick={previousPage}
            type="button"
            className="btn btn-info mr-1"
          >
            Anterior &laquo;
          </button>
        )}
        {actualPage === totalPages ? null : (
          <button onClick={nextPage} type="button" className="btn btn-info">
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  )
}

export default App
