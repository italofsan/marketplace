import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function App() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push('/login')
        }}
      >
        <Text className='text-blue-base'>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
