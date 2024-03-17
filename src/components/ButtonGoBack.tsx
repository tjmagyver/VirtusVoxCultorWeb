'use client'

import { useRouter } from 'next/navigation'

export function ButtonGoBack() {
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  return (
    <button
      onClick={handleGoBack}
      className="bg-transparent font-inriaSans text-[30px] font-bold text-red-500"
    >
      {'< VOLTAR'}
    </button>
  )
}
