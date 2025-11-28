import { ProductInterface } from '../../../../shared/interfaces/product'

import { useProductCardViewModel } from './useProductCard.viewModel'
import { ProductCardView } from './ProductCard.view'

interface ProductCardProps {
  product: ProductInterface
}

export const ProductCard = (props: ProductCardProps) => {
  const viewModel = useProductCardViewModel(props)

  return <ProductCardView {...viewModel} />
}
