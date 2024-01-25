'use client'
import { api } from '@/services/api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface AudiobookListItemProps {
  bookName: string
  bookId: string
  isVisible?: boolean
}

export function AudiobookListItem({
  bookName,
  bookId,
  isVisible = true
}: AudiobookListItemProps) {
  const [showBookName, setShowBookName] = useState(isVisible)
  const router = useRouter()

  async function toogleShowBookName() {
    const data = {
      isVisible: !showBookName
    }
    await api.patch(`audiobooks/${bookId}`, data)
    setShowBookName(!showBookName)
  }

  function handleNavigateToTracksByBookId() {
    router.push(`/tracks/${bookId}`)
  }

  return (
    <div className="flex w-[95%] items-center gap-2.5">
      <button onClick={toogleShowBookName}>
        {showBookName ? (
          <Image
            src="/iconEye.png"
            alt="Icon Eye"
            width={40}
            height={40}
            quality={100}
            className="object-contain"
          />
        ) : (
          <Image
            src="/iconEyeOff.png"
            alt="Icon Eye Off"
            width={40}
            height={40}
            quality={100}
            className="object-contain"
          />
        )}
      </button>
      <span className="flex h-10 w-11/12 items-center bg-gray-100 pl-2.5 font-inriaSans text-2xl font-light text-gray-300">
        {showBookName ? `${bookName}` : ''}
      </span>
      <button
        onClick={handleNavigateToTracksByBookId}
        className="ml-1 h-10 w-[69px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white"
      >
        {'///'}
      </button>
    </div>
  )
}
