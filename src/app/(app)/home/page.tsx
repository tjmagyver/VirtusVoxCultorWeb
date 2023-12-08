import { ButtonBookList } from '@/components/ButtonBookList'
import { Label } from '@/components/Label'
import { Select } from '@/components/Select'
import { SelectItem } from '@/components/Select/SelectItem'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex w-full gap-6">
      <aside className="mt-[36px] flex w-full max-w-[314px] flex-col">
        <div className="flex items-center justify-between">
          <Label textLabel="Versão:" htmlFor="editor" />
          <Select placeholder="NOME EDITORA">
            <SelectItem value="dialetica" text="Dialética" />
            <SelectItem value="saraiva" text="Saraiva" />
            <SelectItem value="atlas" text="Atlas" />
          </Select>
        </div>
        <div className="mt-[26px] flex flex-col gap-[13px]">
          <Label textLabel="Capa:" />
          <label
            htmlFor="cover"
            className="flex h-[458px] w-[315px] cursor-pointer items-center justify-center bg-white"
          >
            <Image
              src="/iconUpload.png"
              alt="Icon Upload"
              quality={100}
              width={181}
              height={181}
              className="object-contain"
            />
            <input type="file" className="hidden" accept="/image*" id="cover" />
          </label>
        </div>
        <div className="mb-[22px] mt-8 flex gap-6">
          <div className="flex flex-col gap-2">
            <Label textLabel="Nº de Faixas:" htmlFor="numberTracks" />
            <input className="h-[47px] w-[130px] bg-white" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <Label textLabel="Catalográfica:" htmlFor="cataloging" />
            <button className="h-[45px] w-[159px] bg-red-500 text-center font-inriaSans text-2xl font-light text-white">
              FICHA
            </button>
          </div>
        </div>
        <button className="h-[45px] w-full bg-red-500 text-center font-inriaSans text-2xl font-light text-white">
          ENVIAR FAIXAS
        </button>
      </aside>
      <section className="-mt-6 ml-auto flex w-full max-w-[964px] flex-col items-end gap-3">
        <div className="flex items-center justify-between gap-[66px]">
          <div className="flex items-end gap-2">
            <div className="flex items-center justify-between gap-1">
              <Label textLabel="Lista total do acervo" />
              <p className="mt-2 font-inriaSans text-[14px] font-light text-gray-300">
                (Excluir /Editar):
              </p>
            </div>
            <ButtonBookList />
          </div>
          <div className="flex items-end gap-2">
            <Label textLabel="Nova Versão:" />
            <button className="flex h-[45px] w-[57px] items-center justify-center bg-red-500">
              <Image
                src="/iconAdd.png"
                alt="Icon Add"
                quality={100}
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <Label textLabel="Link de compra:" htmlFor="buyLink" />
          <input
            type="text"
            id="buyLink"
            className="h-[45px] w-[784px] bg-white px-[14px] py-2 font-inriaSans text-2xl italic text-black outline-1 outline-gray-300 placeholder:text-gray-100"
            placeholder="www.sitedaeditor.com.br/id"
          />
        </div>
        <div className="flex gap-4">
          <Label textLabel="Título:" htmlFor="title" />
          <input
            className="h-[45px] w-[883px] bg-white px-[14px] py-2 font-inriaSans text-2xl italic text-black outline-1 outline-gray-300 placeholder:text-gray-100"
            placeholder="Nome do livro"
          />
        </div>
        <textarea
          className="mt-[3px] h-[639px] w-full bg-white px-[14px] py-[11px] font-inriaSans text-2xl italic text-black outline-1 outline-gray-300 placeholder:text-gray-100"
          placeholder="Sinópse"
        />
      </section>
    </section>
  )
}
