import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ButtonVariants, buttonVariants } from './button.variants'

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {}

export const AppButton = ({ ...rest }: AppButtonProps) => {
  const styles = buttonVariants()
  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text>Teste</Text>
    </TouchableOpacity>
  )
}
