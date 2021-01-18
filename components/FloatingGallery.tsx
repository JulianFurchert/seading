import React, { createContext, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image' 
import { Box } from './Box' 

const SpeedContext = createContext<React.Dispatch<React.SetStateAction<number>>>(null);

type FloatingGalleryProps = {}

export const FloatingGallery: React.FC<FloatingGalleryProps> = ({ children }) => {
  const [speed, setSpeed] = useState(300);

  return(
    <SpeedContext.Provider value={setSpeed}>
      <motion.div>
        {children}
      </motion.div>
    </SpeedContext.Provider>
  )
}

type FloatingImageProps = {}

export const FloatingImage: React.FC<FloatingImageProps> = ( props ) => {
  const setSpeed = useContext(SpeedContext);

  const handleOnHoverStart = () => {
    setSpeed(0)
  }

  const handleOnHoverEnd = () => {
    setSpeed(300)
  }

  return(
    <motion.div
      onHoverStart={handleOnHoverStart}
      onHoverEnd={handleOnHoverEnd}
      whileHover={{ y: 5 }}
      style={{display: 'inline-block'}}
      {...props}
    >
      <Box 
        css={{
          height: 600, 
          width: 400, 
          backgroundColor: '$primary'
        }}
      />
    </motion.div>
  )
}

