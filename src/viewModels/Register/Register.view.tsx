import { Text, TouchableOpacity, View } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'
import { AppInput } from '../../components/AppInput'

export const RegisterView = ({
  onSubmit,
}: ReturnType<typeof useRegisterViewModel>) => {
  return (
    <View className='flex-1  justify-center'>
      <AppInput />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
