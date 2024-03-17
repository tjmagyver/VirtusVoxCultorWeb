'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function ButtonBookList() {
  const router = useRouter()

  function handleNavigateToBookList() {
    router.push('/bookList')
  }
  return (
    <button
      type="button"
      onClick={handleNavigateToBookList}
      className="flex h-[45px] w-[57px] items-center justify-center bg-red-500"
    >
      <Image
        src="/iconHamburger.png"
        alt="Icon Hamburguer"
        quality={100}
        width={45}
        height={32}
        className="object-contain"
      />
    </button>
  )
}
