import { useRef, useState } from 'react'
import { BlurEvent, FocusEvent, TextInput } from 'react-native'

import { colors } from '../../../styles/colors'

interface AppInputViewModelProps {
  isError?: boolean
  isDisabled?: boolean

  secureTextEntry?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: BlurEvent) => void
  mask?: (text: string) => string | undefined
  onChangeText?: (text: string) => string | void
  value?: string
}

export const useAppInputViewModel = ({
  isError,
  isDisabled,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: AppInputViewModelProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(secureTextEntry)

  const inputRef = useRef<TextInput>(null)

  const handlePasswordToggle = () => {
    setShowPassword((prevValue) => !prevValue)
  }

  const handleWrapperPress = () => {
    inputRef.current?.focus()
  }

  const handleFocus = (event: FocusEvent) => {
    console.log('Focou no input')
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: BlurEvent) => {
    console.log('Desfocou do input')
    setIsFocused(false)
    onBlur?.(event)
  }

  const handleTextChange = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || '')
    } else {
      onChangeText?.(text)
    }
  }

  const getIconColor = () => {
    if (isError) return colors.danger
    if (isFocused) return colors['purple-base']
    if (value) return colors['purple-base']
    return colors.gray[200]
  }

  return {
    getIconColor,
    handleBlur,
    handleFocus,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
    handleTextChange,
    isFocused,
  }
}
