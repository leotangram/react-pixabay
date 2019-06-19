import React, { useState } from 'react'
import Error from './Error'

function Search({ setSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(false)

  const searchImage = e => {
    e.preventDefault()

    // Validar
    if (searchTerm === '') {
      setError(true)
      return
    }

    // Enviar el término hacia el componente principal
    setError(false)
    setSearch(searchTerm)
  }
  return (
    <form onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control from-control-lg"
            placeholder="Busca una imágen, ejemplo: Fútbol o café"
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
        <div className="form-group col-md-8">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error message="Agrega un término de búsqueda" /> : null}
    </form>
  )
}

export default Search
