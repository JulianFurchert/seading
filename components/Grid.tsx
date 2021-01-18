import { styled } from '../stitches.config'

export const Grid = styled('div',{
  width: "100%", 
  display: "grid", 
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoRows: '1fr',
  gridColumnGap: '$4',
  gridRowGap: '$4',
  margin: '$4 0',
  variants: {
    reverse: {
      true: {
        '& > *:first-child': {
          order: 2
        }
      },
      false: {

      }
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        bp1: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        }
      },
      3: {
        bp1: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        }
      }
    }
  }
})

export default Grid;