import { useTranslations } from 'next-intl'

import { AnimateDownOnClickLeft } from '@/shared/ui/buttons/animate-down-on-click/AnimateDownOnClick'
import Button from '@/shared/ui/buttons/Button'
import Icon from '@/shared/ui/icons/Icon'

interface Props {
  isLoading: boolean
}

export const GoogleButton = ({ isLoading }: Props) => {
  const t = useTranslations('auth.mediaButtons')
  const tLoading = useTranslations('loading')
  return (
    <AnimateDownOnClickLeft>
      <Button
        type="submit"
        className=""
        disabled={isLoading}
        size="full"
        variant="transparent"
      >
        {isLoading ? tLoading('title') : t('google.label')}
        <Icon variant="google" size={20} />
      </Button>
    </AnimateDownOnClickLeft>
  )
}
