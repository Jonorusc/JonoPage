/* eslint-disable @typescript-eslint/no-explicit-any */
export type DialogProps = {
  open: boolean
  title: string
  onYes: (event: React.MouseEvent<any, MouseEvent>) => void
  onNo: (event: React.MouseEvent<any, MouseEvent>) => void
}
