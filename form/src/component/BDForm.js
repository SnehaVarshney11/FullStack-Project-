import React from 'react'
import './style.css';
function BDForm() {
  const data = [
    {personalSkills : "Dancing", professionalSkills : "Android", hobbies : "Reading books"},
    {personalSkills : "Singing", professionalSkills : "Java", hobbies : "Playing chess"}
  ]
  return (
    <div className='parent'>
    <table>
        <tr>
          <th>Personal Skills</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.personalSkills}</td>
            </tr>
          )
        })}
      </table>
      <table>
        <tr>
          <th>Professional Skills</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.professionalSkills}</td>
            </tr>
          )
        })}
      </table>
      <table>
        <tr>
          <th>Hobbies</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.hobbies}</td>
            </tr>
          )
        })}
      </table>
      </div>
  )
}

export default BDForm;