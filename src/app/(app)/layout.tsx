import Image from 'next/image'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full pb-[13px] pl-5 pr-[14px] pt-[15px]">
      <main className="flex h-full w-full flex-col rounded-[10px] bg-gray-100 pb-[23px] pl-[60px] pr-[35px] pt-[28px]">
        <Image
          src="/iconApplication.png"
          alt="Icon Application"
          quality={100}
          width={446}
          height={134}
          className="object-contain"
        />
        {children}
      </main>
    </div>
  )
}
