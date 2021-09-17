import React, { useState } from 'react'
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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newWord, setNewWord ] = useState(
  '')

  const [ newName, setNewName ] = useState(
  '')

  const [ newNumber, setNewNumber ] = useState(
    '')
  
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
      setPersons(persons.concat(personObject))
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