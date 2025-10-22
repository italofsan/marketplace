import {
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TextInputProps,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { appInputVarants, AppInputVariants } from './input.variants'
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
  const styles = appInputVarants({})

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons name='person' size={22} />
        <TextInput className={styles.input()} {...rest} />

        <TouchableOpacity>
          <Ionicons name='eye-off-outline' size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}
