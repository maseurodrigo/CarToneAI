import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({ title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const genBaseBtnStyles = () => { return { color: getContrastingColor(snap.color) } }
  const genCircleBackground = () => { return { background: snap.color } }

  return (
    <button className={`bg-gray-900 bg-opacity-30 rounded customBtn ${ customStyles }`} style={genBaseBtnStyles()} onClick={handleClick}>
      <span className='circle' style={genCircleBackground()} aria-hidden='true'>
        <span className='icon arrow'></span>
      </span>
      <span className='button-text'>{title}</span>
    </button>
  )
}

export default CustomButton