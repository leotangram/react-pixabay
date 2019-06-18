import React, { useState } from 'react'

function Search() {
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
    </form>
  )
}

export default Search
