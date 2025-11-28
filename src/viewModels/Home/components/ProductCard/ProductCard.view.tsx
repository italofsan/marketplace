import { Text, View } from 'react-native'
import { useProductCardViewModel } from './useProductCard.viewModel'

export const ProductCardView = ({
  product,
}: ReturnType<typeof useProductCardViewModel>) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  )
}
