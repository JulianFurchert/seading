import React, { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from './Box';
import { useRect } from "@reach/rect";
// import Image from 'next/image' 

type FloatingGalleryProps = {}

export const FloatingGallery: React.FC<FloatingGalleryProps> = ({ children }) => {
  const ref = React.useRef();
  const rect = useRect(ref);
  const [page, setPage] = useState(0);
  const height = rect?.height;
  const duration = height / 80;

  const handleComplete = () => {
    setPage(page + 1);
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if(page === 0 && height) setPage(page + 1)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[height])

  return(
    <Box data-test="test" css={{ height, position: 'relative', overflow: 'hidden' }}>
      <Box ref={ref} css={{ opacity: 0, padding: '$6 0' }}>
        <Box css={{ height: 600 }} />
        {children}
      </Box>
      {height && (
      <AnimatePresence initial={false} onExitComplete={handleComplete} >
        <motion.div
          key={page}
          initial = {{ y: height }}
          animate={{ y: 0 }}
          exit={{ y: -height }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }}
          transition={{
            ease: 'linear',
            duration: duration,
          }}
        >
          <Box css={{ height: 600 }} />
          {children}
        </motion.div>
      </AnimatePresence>
      )}
    </Box>
  )
}

type FloatingImageProps = {}

export const FloatingImage: React.FC<FloatingImageProps> = ( props ) => {
  return(
    <Box 
      css={{
        height: 600, 
        width: 400, 
        backgroundColor: '$primary'
      }}
    />
  )
}

