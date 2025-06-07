import { useCallback } from 'react'

const useConfirm = () => {
  const confirmAction = useCallback((message: string) => {
    return window.confirm(message)
  }, [])

  return confirmAction
}

export default useConfirm
