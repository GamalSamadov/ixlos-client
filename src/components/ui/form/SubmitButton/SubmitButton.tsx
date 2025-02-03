import { AnimateDownOnClickRight } from '../../AnimateDownOnClick/AnimateDownOnClick'

interface Props {
  isLoading: boolean
  isLogin?: boolean
  isAuth?: boolean
  loadingText?: string
  confirmText?: string
}

export const SubmitButton = ({
  isLoading,
  isLogin,
  isAuth,
  loadingText,
  confirmText,
}: Props) => {
  if (loadingText && confirmText) {
    if (isAuth) {
      return (
        <AnimateDownOnClickRight>
          <button
            type="submit"
            className="btn_primary_full"
            disabled={isLoading}
          >
            {isLoading ? loadingText : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </AnimateDownOnClickRight>
      )
    }
    return (
      <AnimateDownOnClickRight>
        <button type="submit" className="btn_primary_full" disabled={isLoading}>
          {isLoading ? loadingText : confirmText}
        </button>
      </AnimateDownOnClickRight>
    )
  }
  return (
    <AnimateDownOnClickRight>
      <button type="submit" className="btn_primary_full" disabled={isLoading}>
        {isLoading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
      </button>
    </AnimateDownOnClickRight>
  )
}
