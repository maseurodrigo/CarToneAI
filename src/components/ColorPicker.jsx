import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import { motion } from 'framer-motion'

import { fadeAnimation } from '../config/motion'
import state from '../store'

const ColorPicker = ({ colorChange }) => {
  const snap = useSnapshot(state);

  return (
    <motion.div className='absolute left-full ml-3' {...fadeAnimation}>
      <SketchPicker color={snap.color} disableAlpha onChange={(color) => state.color = color.hex} onChangeComplete={() => colorChange(true)} />
    </motion.div>
  )
}

export default ColorPicker