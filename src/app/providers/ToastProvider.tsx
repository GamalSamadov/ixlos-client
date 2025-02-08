import type { ComponentProps } from 'react'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

export function ToastProvider({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}
