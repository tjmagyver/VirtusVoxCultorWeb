'use client'
import { ButtonBookList } from '@/components/ButtonBookList'
import { Label } from '@/components/Label'
import { Select } from '@/components/Select'
import { SelectItem } from '@/components/Select/SelectItem'
import { api } from '@/services/api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const createAudiobookBodySchema = z.object({
  cover: z.string(),
  duration: z.number(),
  publisher: z.string(),
  linkPurchase: z.string().url(),
  sinopse: z.string(),
  title: z.string(),
  numberOfChapters: z.number(),
  isPrivate: z.boolean(),
})

type CreateAudiobookBodySchema = z.infer<typeof createAudiobookBodySchema>

export default function Home() {
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateAudiobookBodySchema>()
  const [fileImage, setFileImage] = useState()
  const [imagePreview, setImagePreview] = useState<any>(null)
  const router = useRouter()
  async function handleCreateAudiobook(data: CreateAudiobookBodySchema) {
    const urlUploaded = await handleFileUpload()
    console.log(urlUploaded)
    const newData: CreateAudiobookBodySchema = {
      cover: urlUploaded,
      duration: 3600,
      linkPurchase: data.linkPurchase,
      publisher: 'Dialética',
      sinopse: data.sinopse,
      title: data.title,
      numberOfChapters: Number(data.numberOfChapters),
      isPrivate: data.isPrivate,
    }
    console.log('ndt', newData)
    try {
      const response = await api.post('audiobooks', newData)
      console.log(response)
      toast.success('Audiobook adicionado com sucesso!')
      router.push(`/tracks/${response.data.id}`)
    } catch (error) {
      console.log(error)
      toast.error('Erro ao adicionar audiobook!')
    }
  }

  const handleImageRemove = () => {
    // const fileInput = event.target;

    // if (fileInput.files && fileInput.files[0]) {
    //   const reader = new FileReader();

    //   reader.onload = function (e) {
    //     console.log(e?.target?.result)
    //     setImagePreview(e?.target?.result);
    //   };

    //   reader.readAsDataURL(fileInput.files[0]);
    // }
    setImagePreview(null)
  }

  async function handleFileUpload() {
    const formData = new FormData()
    formData.append('file', fileImage!)

    console.log(formData)
    try {
      const response = await api.post('chapters/upload', formData)
      return response.data.url
    } catch (error) {
      console.error('Error uploading file', error)
    }
  }

  const handleImageUpload = (event: any) => {
    const fileInput = event.target

    console.log(fileInput?.files[0])

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader()

      reader.onload = function (e) {
        console.log(e)
        console.log(e?.target?.result)
        setImagePreview(e?.target?.result)
        setFileImage(fileInput?.files[0])
      }

      reader.readAsDataURL(fileInput.files[0])
    }
  }

  return (
    <form
      className="flex w-full gap-6"
      onSubmit={handleSubmit(handleCreateAudiobook)}
    >
      <aside className="mt-[36px] flex w-full max-w-[314px] flex-col">
        <div className="flex items-center justify-between">
          <Label textLabel="Versão:" htmlFor="publisher" />
          <Select placeholder="NOME EDITORA" {...register('publisher')}>
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
            {!imagePreview && (
              <>
                <Image
                  src="/iconUpload.png"
                  alt="Icon Upload"
                  quality={100}
                  width={181}
                  height={181}
                  className="object-contain"
                />
                <input
                  type="file"
                  className="hidden"
                  accept="/image*"
                  id="cover"
                  {...register('cover')}
                  onChange={handleImageUpload}
                />
              </>
            )}
            {imagePreview && (
              <div>
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="h-full w-full"
                />
                <button onClick={handleImageRemove}>trocar</button>
              </div>
            )}
          </label>
        </div>
        <div className="mb-[22px] mt-8 flex gap-6">
          <div className="flex flex-col gap-2">
            <Label textLabel="Nº de Faixas:" htmlFor="numberTracks" />
            <input
              className="h-[47px] w-[130px] bg-white px-[14px] font-inriaSans text-2xl italic text-black outline-1 outline-gray-300"
              {...register('numberOfChapters')}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <Label textLabel="Catalográfica:" htmlFor="cataloging" />
            <button
              type="button"
              className="h-[45px] w-[159px] bg-red-500 text-center font-inriaSans text-2xl font-light text-white"
            >
              FICHA
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="h-[45px] w-full bg-red-500 text-center font-inriaSans text-2xl font-light text-white"
        >
          ENVIAR FAIXAS
        </button>
      </aside>
      <section className="-mt-6 ml-auto flex w-full max-w-[964px] flex-col items-end gap-3">
        <div className="flex items-center justify-between gap-[66px]">
          <div className="flex items-end gap-2">
            <div className="mr-[245px] flex items-center justify-between">
              <Label textLabel="Público" />
              <input
                type="checkbox"
                {...register('isPrivate')}
                className="ml-4 h-6 w-6"
              />
            </div>
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
            <button
              type="button"
              className="flex h-[45px] w-[57px] items-center justify-center bg-red-500"
            >
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
            {...register('linkPurchase')}
          />
        </div>
        <div className="flex gap-4">
          <Label textLabel="Título:" htmlFor="title" />
          <input
            className="h-[45px] w-[883px] bg-white px-[14px] py-2 font-inriaSans text-2xl italic text-black outline-1 outline-gray-300 placeholder:text-gray-100"
            placeholder="Nome do livro"
            {...register('title')}
          />
        </div>
        <textarea
          className="mt-[3px] h-[639px] w-full bg-white px-[14px] py-[11px] font-inriaSans text-2xl italic text-black outline-1 outline-gray-300 placeholder:text-gray-100"
          placeholder="Sinópse"
          {...register('sinopse')}
        />
      </section>
    </form>
  )
}
