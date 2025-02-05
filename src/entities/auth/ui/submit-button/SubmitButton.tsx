import { AnimateDownOnClickRight } from '@/shared/ui/buttons/animate-down-on-click/AnimateDownOnClick'
import Button from '@/shared/ui/buttons/Button'

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
      <Button type="submit" disabled={isLoading || disabled} size="full">
        {isLoading ? loadingText : confirmText}
      </Button>
    </AnimateDownOnClickRight>
  )
}
