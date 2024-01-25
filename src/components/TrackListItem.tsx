/* eslint-disable prettier/prettier */
'use client'
import { api } from '@/services/api'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
interface TrackListItemProps {
  trackId: number
  audiobookId?: string
}

export function TrackListItem({
  trackId,
  audiobookId
}: TrackListItemProps) {
  const { register, handleSubmit } = useForm()
  const [uploadedUrl, setUploadedUrl] = useState(false)

  async function handleFileUpload(file: any) {
    const formData = new FormData();
    formData.append('file', file[0]);

    try {
      const response = await api.post('chapters/upload', formData)
      setUploadedUrl(true)
      return response.data.url;
    } catch (error) {
      console.error('Error uploading file', error);
    }
  }

  async function handleCreateChapter(data: any) {
    const file = await handleFileUpload(data.file)

    if (file) {
      const newData = {
        audiobookId,
        duration: 3600,
        file: `${process.env.NEXT_PUBLIC_BUCKET_URL}${file}`,
        title: data.title
      }
      try {
        await api.post('chapters', newData)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateChapter)} className="flex w-[95%] items-center gap-2.5">
      <span className="h-[45px] w-[52px] bg-gray-300 flex items-center justify-center font-inriaSans text-[40px] font-bold text-white">
        {trackId}
      </span>
      {/* <span className="flex h-[45px] -ml-2.5 w-11/12 items-center bg-white font-inriaSans text-2xl font-light text-gray-100 px-[23px]">
        {trackName}
      </span> */}
      <input type="text" {...register('title')} className="flex h-[45px] -ml-2.5 w-11/12 items-center bg-white font-inriaSans text-2xl font-light text-gray-900 px-[23px]" />
      <button className="h-[45px] mx-3 w-[79px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white">
        {'///'}
      </button>
      <button className="h-[45px] w-[79px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white">
        {'X'}
      </button>

      {!uploadedUrl ? (
        <label
          className={`h-[45px] w-[94px] rounded-[10px] ml-4 bg-blue-700 flex items-center justify-center font-inriaSans text-2xl font-bold text-white cursor-pointer`}
        >
          <p>-</p>
          <input type="file" {...register('file')} hidden />
        </label>) : (
        <button
          className={`h-[45px] w-[94px] rounded-[10px] ml-4 bg-green-500 flex items-center justify-center font-inriaSans text-2xl font-bold text-white`}
        >
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 11.5L0.75 22.3253V0.674683L18 11.5Z" fill="white" />
          </svg>
        </button>
      )}

      <button
        type="submit"
        className={`h-[45px] w-[94px] rounded-[10px] bg-transparent
           flex items-center justify-center font-inriaSans text-2xl font-bold text-white`}
      >
        <Image
          src="/iconSend.png"
          alt="Icon Send"
          quality={100}
          width={25}
          height={22}
          className="object-contain"
        />
      </button>
    </form>
  )
}
