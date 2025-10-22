import { tv, type VariantProps } from 'tailwind-variants'

export const appInputVarants = tv({
  slots: {
    container: 'w-full my-4',
    wrapper: 'flex-row items-center border-b border-gray-200 pb-2',
    input: 'bg-transparent text-gray-500 text-base flex-1',
    label: 'text-xs text-gray-300 mb-3 font-semibold',
    error: 'text-sm text-danger mt-1',
  },
  variants: {
    isFocused: {
      true: {},
    },
    isError: {
      true: {},
    },
    isDisable: {
      true: {},
    },
  },
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisable: false,
  },
})

export type AppInputVariants = VariantProps<typeof appInputVarants>
