import { Button, AnimateDownOnClickRight } from '@/shared/ui'

import styles from './SubmitButton.module.scss'

interface Props {
  disabled?: boolean
  isLoading: boolean
  loadingText: string
  confirmText: string
}

export const SubmitButton = ({
  disabled = false,
  isLoading,
  loadingText,
  confirmText,
}: Props) => {
  return (
    <AnimateDownOnClickRight>
      <Button
        type="submit"
        disabled={isLoading || disabled}
        size="full"
        className={styles['submit-button']}
      >
        {isLoading ? loadingText : confirmText}
      </Button>
    </AnimateDownOnClickRight>
  )
}
