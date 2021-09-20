import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const Filter =({newWord,search}) => {
  return(
    <div>
      filter shown with: <input value={newWord}  onChange={search}/>
    </div>
  )
}
const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map(person => 
        <Person key={person.name} name={person.name} number={person.number}/>
      )}
    </ul>
  )
}
const Person = ( {name,number}  ) => {
  return (
      <li>{name} {number}</li>
    )
}

const PersonForm = ({addPerson,newName,handleNameChange,handleNumberChange,newNumber}) => {
  return(
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName}  onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber}  onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
  
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newWord, setNewWord ] = useState('')

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')
  const hook  = () => {
    axios
    .get(baseUrl)
    .then(response => {
      setPersons(response.data)
    })
  }
  useEffect(hook,[])
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number: newNumber,
      id   : newName
    }
    const check = persons.filter(person =>
        person.name === newName
    )
    if (check.length > 0){
      alert(`${newName} is already added to phonebook`)
    } else {
      axios.post(baseUrl, personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const search = (event) => {
    setNewWord(event.target.value)
      const result = persons.filter(person =>
        person.name.includes(newWord)
      )
      setPersons(result)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter newWord={newWord} search={search}/>
      
      <h3>add a new</h3>
      
      <PersonForm 
        addPerson={addPerson}
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}

      />

      <h3>Numbers</h3>
      
      <Persons persons={persons}/>
    </div>
  )
}

export default App