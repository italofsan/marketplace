import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../../../styles/colors'

import { useProductCardViewModel } from './useProductCard.viewModel'

export const ProductCardView = ({
  product,
}: ReturnType<typeof useProductCardViewModel>) => {
  return (
    <TouchableOpacity className='w-[48%] my-1 rounded-xl shadow-sm overflow-hidden h-[157px] p-[4px] bg-white mb-2'>
      <View>
        <Image
          // @ts-ignore
          source={{ uri: product.imageUrl }}
          className='w-full h-[96px] rounded-md'
          resizeMode='cover'
        />
        <View className='absolute top-0 right-0 flex-row items-center px-2 py-1 rounded-b-lg rounded-r-none bg-white'>
          <Ionicons name='star' size={12} color={colors['blue-base']} />
          <Text className='text-sm font-semibold ml-1'>
            {product.ratingCount}
          </Text>
        </View>
      </View>
      <View className='p-3'>
        <Text className='text-xs font-semibold mb-1' numberOfLines={1}>
          {product.name}
        </Text>
        <View className='flex-row items-center justify-between'>
          <Text>R$ {product.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
