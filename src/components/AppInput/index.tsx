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

export interface AppInputProps extends TextInputProps, AppInputVariants {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  containerClassName?: string
  mask?: (value: string) => string
}

export const AppInput = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  ...rest
}: AppInputProps) => {
  const styles = appInputVarants({})

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && <Ionicons name={leftIcon} size={22} />}
        <TextInput className={styles.input()} {...rest} />

        <TouchableOpacity>
          {rightIcon && <Ionicons name={rightIcon} size={22} />}
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}
