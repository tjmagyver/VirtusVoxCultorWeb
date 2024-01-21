/* eslint-disable prettier/prettier */
'use client'
import Image from 'next/image'
interface TrackListItemProps {
  trackName: string
  trackId: number
  trackUploaded?: boolean
}

export function TrackListItem({
  trackName,
  trackId,
  trackUploaded = false
}: TrackListItemProps) {
  return (
    <div className="flex w-[95%] items-center gap-2.5">
      <span className="h-[45px] w-[52px] bg-gray-300 flex items-center justify-center font-inriaSans text-[40px] font-bold text-white">
        {trackId}
      </span>
      {/* <span className="flex h-[45px] -ml-2.5 w-11/12 items-center bg-white font-inriaSans text-2xl font-light text-gray-100 px-[23px]">
        {trackName}
      </span> */}
      <input type="text" className="flex h-[45px] -ml-2.5 w-11/12 items-center bg-white font-inriaSans text-2xl font-light text-gray-900 px-[23px]" />
      <button className="h-[45px] mx-3 w-[79px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white">
        {'///'}
      </button>
      <button className="h-[45px] w-[79px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white">
        {'X'}
      </button>

      {!trackUploaded ? (
        <label
          className={`h-[45px] w-[94px] rounded-[10px] ml-4 bg-blue-700 flex items-center justify-center font-inriaSans text-2xl font-bold text-white cursor-pointer`}
        >
          <p>-</p>
          <input type="file" hidden />
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
    </div>
  )
}
