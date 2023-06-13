import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea placeholder='Ask AI something...' rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} className='aipicker-textarea' />
      <div className='flex flex-wrap gap-3'>
        { generatingImg ? 
        (<CustomButton title='Asking AI...' customStyles='w-full text-xs pointer-events-none' />) : 
        (<><CustomButton title='AI Logo' handleClick={() => handleSubmit('logo')} customStyles='text-xs' />
        <CustomButton title='AI Full' handleClick={() => handleSubmit('full')} customStyles='text-xs' /></>) }
      </div>
    </div>
  )
}

export default AIPicker