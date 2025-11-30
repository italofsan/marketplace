import { Ionicons } from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native'
import { colors } from '../../../../../../styles/colors'

interface StarsParams {
  rating: number
}

export const Stars = ({ rating }: StarsParams) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1
    const isSelected = starNumber <= rating
    return (
      <TouchableOpacity key={`star-${index}`} onPress={() => {}}>
        <Ionicons
          name={isSelected ? 'star' : 'star-outline'}
          size={32}
          color={isSelected ? colors['purple-base'] : colors.gray[200]}
        />
      </TouchableOpacity>
    )
  })
}
