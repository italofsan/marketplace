import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function Login() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
          router.push('/register')
        }}
      >
        <Text className='text-blue-base'>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}
