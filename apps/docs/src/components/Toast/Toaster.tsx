import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
} from '@/components'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        console.log(props)
        return (
          <Toast key={id} {...props} duration={555555555555}>
            {title && (
              <ToastTitle>
                {title}
                {id}
              </ToastTitle>
            )}
            {description && <ToastDescription>{description}</ToastDescription>}
            <ToastClose />
            {action}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
