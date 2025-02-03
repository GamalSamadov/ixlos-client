import { AnimateDownOnClickRight } from '@/components/ui/buttons/AnimateDownOnClick/AnimateDownOnClick'

interface Props {
  isLoading: boolean
  loadingText: string
  confirmText: string
}

export const SubmitButton = ({
  isLoading,
  loadingText,
  confirmText,
}: Props) => {
  return (
    <AnimateDownOnClickRight>
      <button type="submit" className="btn_primary_full" disabled={isLoading}>
        {isLoading ? loadingText : confirmText}
      </button>
    </AnimateDownOnClickRight>
  )
}
