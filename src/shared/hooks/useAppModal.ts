import { createElement } from 'react'

import { Ionicons } from '@expo/vector-icons'

import { useModalStore } from '../store/modal-store'

import {
  SelectionModal,
  SelectionModalProps,
} from '../components/Modals/SelectionModal'

export type SelectionVariant = 'primary' | 'secondary' | 'danger'

export interface SelectionOptions {
  text: string
  onPress: () => void
  icon?: keyof typeof Ionicons.glyphMap
  variant?: SelectionVariant
}

export const useAppModal = () => {
  const { open, close } = useModalStore()

  const showSelection = ({
    title,
    message,
    options,
  }: {
    title: string
    message?: string
    options: SelectionOptions[]
  }) => {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps)
    )
  }
  return { showSelection }
}
