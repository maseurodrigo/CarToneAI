import React from 'react'
import { motion } from 'framer-motion'

import { fadeAnimation } from '../config/motion'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <motion.div className='filepicker-container' {...fadeAnimation}>
      <div className='flex-1 flex flex-col'>
        <input id='file-upload' type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
        <label htmlFor='file-upload' className='filepicker-label'>Upload Pattern</label>
        <p className='mt-2 text-gray-500 text-xs truncate'>
          { file === '' ? 'No file selected' : file.name } 
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton title='Full' handleClick={() => readFile('full')} customStyles='text-xs'/>
      </div>
    </motion.div>
  )
}

export default FilePicker