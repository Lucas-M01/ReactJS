import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  border: 0,
  color: '$white',
  fontWeight: '$bold',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
  defaulVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
