import { styled } from '../stitches.config'

export const Text = styled('div', {
  fontFamily: '$body',
  color: '$hiContrast',
  lineHeight: 1.5,
  fontSize: '$3',
  fontWeight: '$body',
  variants: {
    variant: {
      large: {
        fontWeight: '$heading',
        fontSize: '160px',
        lineHeight: 1.2,
      },
      headline: {
        fontWeight: '$heading',
        fontSize: '$7',
        lineHeight: 1.2,
      },
      headline2: {
        fontWeight: '$heading',
        fontSize: '$6',
      },
      bodyLarge: {
        fontSize: '$5',
        fontWeight: '$body'
      },
      paragraph: {
        fontSize: '$5',
        fontWeight: '$body',
        marginBottom: '$2',
      },
      body: {
        fontSize: '$3',
        fontWeight: '$body'
      },
      body2: {
        fontSize: '$2',
        fontWeight: '$body'
      },
      caption: {
        fontSize: '$1',
        fontWeight: '$body'
      },
    },
  },
})