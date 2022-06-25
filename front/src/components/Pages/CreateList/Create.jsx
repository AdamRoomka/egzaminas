import React from 'react'
import './create.css'

function Create() {
  return (
    <form id='sukurti_duomenys'>
        <input type="text" placeholder='firstDate' />
        <input type="text" placeholder='secondDate' />
        <input type="text" placeholder='thirdDate' />
        <div className="buttons">
            <button>Sukurti</button>
            <button>Atšaukti</button>
        </div>
    </form>
  )
}

export default Create