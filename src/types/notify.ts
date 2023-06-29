export type NotifyProps = {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
  position?: 'top' | 'bottom'
  visible: boolean
  onClose?: () => void
}
