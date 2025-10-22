import {
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TextInputProps,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { appInputVariants, AppInputVariants } from './input.variants'
import { useAppInputViewModel } from './useAppInputViewModel'

export interface AppInputProps extends TextInputProps, AppInputVariants {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  containerClassName?: string
  mask?: (value: string) => string
  error?: string
}

export const AppInput = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  value,
  isError,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  error,
  mask,
  isDisable,
  ...rest
}: AppInputProps) => {
  const {
    getIconColor,
    handleWrapperPress,
    handlePasswordToggle,
    handleFocus,
    handleBlur,
    handleTextChange,
    isFocused,
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisable,
    secureTextEntry,
    value,
  })
  const styles = appInputVariants({ isFocused })

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            color={getIconColor()}
            className='mr-3'
            size={22}
            name={leftIcon}
          />
        )}
        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleTextChange}
          className={styles.input()}
          value={value}
          {...rest}
        />

        <TouchableOpacity>
          <Ionicons name='eye-off-outline' size={22} />
        </TouchableOpacity>
      </Pressable>

      {error && (
        <Text className={styles.error()}>
          <Ionicons className='ml-2' name='alert-circle-outline' /> {error}
        </Text>
      )}
    </View>
  )
}
