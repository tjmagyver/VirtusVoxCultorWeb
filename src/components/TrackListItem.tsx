/* eslint-disable prettier/prettier */
'use client'

interface TrackListItemProps {
  trackName: string
  trackId: string
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
      <span className="flex h-[45px] -ml-2.5 w-11/12 items-center bg-white font-inriaSans text-2xl font-light text-gray-100 px-[23px]">
        {trackName}
      </span>
      <button className="h-[45px] mx-3 w-[79px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white">
        {'///'}
      </button>
      <button className="h-[45px] w-[79px] bg-red-500 text-center font-inriaSans text-[18px] font-bold text-white">
        {'X'}
      </button>
      <button
        className={`h-[45px] w-[94px] rounded-[10px] ml-4
        ${trackUploaded ? 'bg-green-500' : 'bg-blue-700'
          } flex items-center justify-center font-inriaSans text-2xl font-bold text-white`}
      >
        {trackUploaded ? (
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 11.5L0.75 22.3253V0.674683L18 11.5Z" fill="white" />
          </svg>
        ) : (
          '-'
        )}
      </button>
    </div>
  )
}
