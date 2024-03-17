import { AudiobookListItem } from '@/components/AudiobookListItem'
import { ButtonGoBack } from '@/components/ButtonGoBack'
import { Label } from '@/components/Label'
import { Select } from '@/components/Select'
import { SelectItem } from '@/components/Select/SelectItem'
import { api } from '@/services/api'
import Image from 'next/image'

type Audiobook = {
  bookName: string
  bookId: string
}

const audiobooks: Audiobook[] = [
  {
    bookName: 'Audiobook 1',
    bookId: '1',
  },
  {
    bookName: 'Audiobook 2',
    bookId: '2',
  },
  {
    bookName: 'Audiobook 3',
    bookId: '3',
  },
  {
    bookName: 'Audiobook 4',
    bookId: '4',
  },
  {
    bookName: 'Audiobook 5',
    bookId: '5',
  },
  {
    bookName: 'Audiobook 6',
    bookId: '6',
  },
  {
    bookName: 'Audiobook 7',
    bookId: '7',
  },
  {
    bookName: 'Audiobook 8',
    bookId: '8',
  },
  {
    bookName: 'Audiobook 9',
    bookId: '9',
  },
  {
    bookName: 'Audiobook 10',
    bookId: '10',
  },
  {
    bookName: 'Audiobook 11',
    bookId: '11',
  },
  {
    bookName: 'Audiobook 12',
    bookId: '12',
  },
  {
    bookName: 'Audiobook 13',
    bookId: '13',
  },
  {
    bookName: 'Audiobook 14',
    bookId: '14',
  },
]

async function getAudiobooks() {
  const audiobooks = await api.get('/audiobooks')

  return audiobooks.data
}

export default async function BookList() {
  const audiobooksList: any = await getAudiobooks()

  console.log(audiobooksList)

  return (
    <section className="flex h-full w-full flex-col gap-6 pr-6">
      <header className="mt-[36px] flex w-full items-center justify-between">
        <div className="flex items-center justify-between gap-[26px]">
          <Label textLabel="Versão:" htmlFor="editor" />
          <Select placeholder="NOME EDITORA">
            <SelectItem value="dialetica" text="Dialética" />
            <SelectItem value="saraiva" text="Saraiva" />
            <SelectItem value="atlas" text="Atlas" />
          </Select>
        </div>
        <div className="flex gap-12">
          <Image
            src="/iconDiskette.png"
            alt="Icon Diskette"
            width={96}
            height={96}
            quality={100}
            className="object-contain"
          />
          <div className="flex flex-col gap-1">
            <button className="flex h-[72px] w-[272px] items-center justify-center rounded-[10px] bg-red-500">
              <Image
                src="/iconWarning.png"
                alt="Icon Warning"
                width={57}
                height={70}
                quality={100}
                className="object-contain opacity-10 bg-blend-darken"
              />
              <span className="font-inriaSans text-[40px] font-light text-white">
                Publicar
              </span>
            </button>
            <p className="font-inriaSans text-2xl font-light text-gray-300">
              Somente alterações salvas
            </p>
          </div>
          <div className="ml-1 flex items-end gap-8">
            <p className="font-inriaSans text-2xl font-light text-gray-300">
              Livros Listados:
            </p>
            <div className="-mt-10 flex flex-col items-end gap-10">
              <ButtonGoBack />
              <span className="flex h-[47px] w-[130px] items-center justify-center bg-gray-50 font-inriaSans text-[30px] font-light text-gray-300">
                {audiobooksList?.length}
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="flex flex-col gap-1">
        <div className="flex items-center gap-[146px]">
          <span className="font-inriaSans text-2xl font-light text-gray-300">
            Visível:
          </span>
          <span className="font-inriaSans text-2xl font-light text-gray-300">
            Nome:
          </span>
        </div>
        <div className="flex h-[645px] w-full flex-col gap-6 bg-white pb-4 pl-2 pt-1.5">
          <input
            type="search"
            placeholder="Buscar audiobook"
            className="h-11 w-11/12 border border-gray-300 pl-4 pr-1 font-inriaSans text-2xl text-gray-300 outline-none placeholder:text-gray-100"
          />
          <div className="flex max-h-[645px] w-11/12 flex-col gap-2 overflow-y-auto">
            {audiobooksList.map((audiobook: any) => (
              <AudiobookListItem
                key={audiobook.id}
                bookName={audiobook.title}
                bookId={audiobook.id}
                isVisible={audiobook.isVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
