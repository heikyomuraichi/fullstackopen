import React from 'react'

const Total = ({parts}) => {
  const total = parts.reduce((result, current) => 
  result += current.exercises,0)
  return (
    <>
      <h3>total of {total} exercises</h3>
    </>
  )
}

export default Total