import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ButtonVariants, buttonVariants } from './button.variants'

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap
  children: string
}

export const AppButton = ({ leftIcon, children, ...rest }: AppButtonProps) => {
  const styles = buttonVariants()

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text className={styles.text()}>{children}</Text>
    </TouchableOpacity>
  )
}
