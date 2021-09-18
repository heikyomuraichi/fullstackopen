import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [result, setResult] = useState([])
  const [word, setWord] = useState('')
  // fetch
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  const search = (event) => {
    setWord(event.target.value)
    // search
    const searchResult = countries.filter(country =>
      { const upperName = country.name.toUpperCase()
        return upperName.indexOf(word.toUpperCase()) === -1 ? false : true
      }
      
    )
    setResult(searchResult)
  }

  return (
    <div>
      <div>
        <form>
          find countries
          <input
            value={word}
            onChange={search}
          />
        </form>
      </div>
      <Country
        countries={result}
      />
    </div>
  )
}

export default App;
