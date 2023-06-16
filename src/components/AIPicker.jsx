import React from 'react'
import { motion } from 'framer-motion'

import { fadeAnimation } from '../config/motion'
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <motion.div className='aipicker-container' {...fadeAnimation}>
      <textarea placeholder='Ask AI something...' rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} className='aipicker-textarea' />
      <div className='flex flex-wrap gap-3'>
        { generatingImg ? 
        (<CustomButton title='Asking AI...' customStyles='w-full text-xs pointer-events-none' />) : 
        (<><CustomButton title='AI Full' handleClick={() => handleSubmit('full')} customStyles='text-xs' /></>) }
      </div>
    </motion.div>
  )
}

export default AIPicker