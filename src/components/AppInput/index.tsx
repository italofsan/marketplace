import { Pressable, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { appInputVarants } from './input.variants'

export const AppInput = () => {
  const styles = appInputVarants({})

  return (
    <View>
      <Pressable>
        <Ionicons name='person' />

        <TextInput />

        <TouchableOpacity>
          <Ionicons name='eye-off-outline' />
        </TouchableOpacity>
      </Pressable>
    </View>
  )
}
