import { useTranslations } from 'next-intl'

import { Button, CustomIcon, AnimateDownOnClickLeft } from '@/shared/ui'

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
        <CustomIcon variant="google" size={20} />
      </Button>
    </AnimateDownOnClickLeft>
  )
}
