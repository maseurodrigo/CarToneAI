import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./react.png' alt='logo' className='w-8 h-8 object-contain drop-shadow-md'></img>
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text text-gray-900 text-left drop-shadow-lg'>GET <br className='xl:block hidden'/> SHIRTED</h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <p className='max-w leading-8 text-gray-800 font-normal text-right text-base drop-shadow-lg'>
              Shake up your shirt game!<br/><strong>Unleash your creative tornado</strong>{" "} and define your own style.
              </p>
              <CustomButton title='Customize' handleClick={() => state.intro = false } customStyles='w-fit mt-5 font-bold float-right text-sm' />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home