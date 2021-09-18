import React from 'react'
const style = {
  width:'10%', 
  height:'10%'
};
const Country = ({countries}) => {
  if (countries.length > 10){
    return (
      <>
        <div>
          Too many matches,specify another filter
        </div>
      </>
    )
  } else if(countries.length < 10 && countries.length > 1){
    return (
      <>
        <div>
          {countries.map(country => 
            <div key={country.numericCode}>
              {country.name}
            </div>
          )}
        </div>
      </>
    )
  } else if(countries.length === 1){
    return (
      <>
        <div>
          {countries.map(country => 
            <div key={country.numericCode}>
              <h2>{country.name}</h2>
              <div/>
              <div>{`capital ${country.capital}`}</div>
              <div>{`population ${country.population}`}</div>
              <h3>languages</h3>
              <ul>
                {country.languages.map(language =>
                  <li key={language.iso639_1}>{language.name}</li>
                )}
              </ul>
              <img src={country.flag} style={style}/>
            </div>
          )}
        </div>
      </>
    )
  } else{
    return (
      <>
        <div>
          {countries.map(country => 
            <div key={country.numericCode}>
              {country.name}
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Country