import { ButtonGoBack } from '@/components/ButtonGoBack'
import { TrackListItem } from '@/components/TrackListItem'
import Image from 'next/image'

interface TracksProps {
  params: {
    id: string
  }
}

type Track = {
  trackName: string
  trackId: string
}

const tracks: Track[] = [
  {
    trackName: 'Track 2',
    trackId: '2',
  },
  {
    trackName: 'Track 3',
    trackId: '3',
  },
  {
    trackName: 'Track 4',
    trackId: '4',
  },
  {
    trackName: 'Track 5',
    trackId: '5',
  },
  {
    trackName: 'Track 6',
    trackId: '6',
  },
  {
    trackName: 'Track 7',
    trackId: '7',
  },
  {
    trackName: 'Track 8',
    trackId: '8',
  },
  {
    trackName: 'Track 9',
    trackId: '9',
  },
  {
    trackName: 'Track 10',
    trackId: '10',
  },
  {
    trackName: 'Track 11',
    trackId: '11',
  },
  {
    trackName: 'Track 12',
    trackId: '12',
  },
  {
    trackName: 'Track 13',
    trackId: '13',
  },
  {
    trackName: 'Track 14',
    trackId: '14',
  },
  {
    trackName: 'Track 15',
    trackId: '15',
  },
]

export default function Tracks({ params }: TracksProps) {
  return (
    <section className="flex h-full w-full flex-col gap-6 pr-6">
      <header className="-mt-[132px] ml-auto flex w-full max-w-[842px] flex-col">
        <div className="flex items-end gap-3.5">
          <span className="font-inriaSans text-2xl font-light text-gray-300">
            Título:
          </span>
          <div className="h-[49px] w-[763px] bg-gray-50 px-[18px] pb-2 pt-2.5">
            <span className="text-center font-inriaSans text-2xl font-light leading-[28px] text-gray-300">
              Nome não editável, que foi inserido na tela anterior
            </span>
          </div>
        </div>

        <div className="mr-auto mt-4 flex items-start justify-start gap-[23px]">
          <div className="flex flex-col items-start justify-start">
            <div className="mb-[12px] flex items-end gap-2.5">
              <p className="font-inriaSans text-2xl font-light text-gray-300">
                Nº de Faixas:
              </p>
              <span className="flex h-[47px] w-[130px] items-center justify-center bg-gray-50 font-inriaSans text-[30px] font-light text-gray-300">
                1/20
              </span>
            </div>
            <div className="flex flex-col items-center">
              <ButtonGoBack />
              <span className="-mt-2 font-inriaSans text-sm font-light text-gray-300">
                Sair s/ salvar
              </span>
            </div>
          </div>
          <Image
            src="/iconClose.png"
            alt="Icon Close"
            width={80}
            height={80}
            quality={100}
            className="object-contain"
          />
          <Image
            src="/iconDiskette.png"
            alt="Icon Diskette"
            width={80}
            height={80}
            quality={100}
            className="ml-[149px] object-contain"
          />
          <button className="h-[76px] w-[196px] bg-red-500 text-center font-inriaSans text-[40px] font-light text-white">
            ENVIAR
          </button>
        </div>
      </header>

      <section className="flex flex-col gap-1">
        <div className="flex items-center">
          <span className="ml-[91px] font-inriaSans text-2xl font-light text-gray-300">
            Nome da faixa:
          </span>
          <div className="ml-auto mr-24 flex max-w-[271px] items-center">
            <span className="font-inriaSans text-2xl font-light text-gray-300">
              Editar:
            </span>
            <span className="ml-[22px] font-inriaSans text-2xl font-light text-gray-300">
              Excluir:
            </span>
            <span className="ml-[24px] font-inriaSans text-2xl font-light text-gray-300">
              Faixa:
            </span>
          </div>
        </div>
        <div className="bg-white_off flex h-[741px] w-full flex-col gap-6 overflow-y-auto pb-4 pl-8 pt-5">
          <TrackListItem
            key={1}
            trackName="Track 1"
            trackId="1"
            trackUploaded
          />
          {tracks.map((track) => (
            <TrackListItem
              key={track.trackId}
              trackName={track.trackName}
              trackId={track.trackId}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
