import { ReviewBottomSheetView } from './ReviewBottomSheet.view'
import { useReviewBottomSheetViewModel } from './useReviewBottomSheet.viewModel'

interface ReviewBottomSheetParams {
  productId: number
}

export const ReviewBottomSheet = ({ productId }: ReviewBottomSheetParams) => {
  const viewModel = useReviewBottomSheetViewModel(productId)
  return <ReviewBottomSheetView {...viewModel} />
}
