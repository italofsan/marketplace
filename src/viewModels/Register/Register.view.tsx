import { Text, TouchableOpacity, View } from 'react-native'
import { useRegisterViewModel } from './useRegister.viewModel'
import { AppInputController } from '../../components/AppInputController'

export const RegisterView = ({
  onSubmit,
  control,
}: ReturnType<typeof useRegisterViewModel>) => {
  return (
    <View className='flex-1  justify-center'>
      <AppInputController
        leftIcon='mail-outline'
        label='E-MAIL'
        control={control}
        name='email'
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}
