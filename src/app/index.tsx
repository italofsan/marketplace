import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function App() {
  return (
    <View>
      <Text>Olá mundo!</Text>
      <TouchableOpacity
        onPress={() => {
          router.push('/login')
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
