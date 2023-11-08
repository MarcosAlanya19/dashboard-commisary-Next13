import { postCase } from '@/service/case.service';
import { Button, Input, Textarea } from '@nextui-org/react';
import { revalidateTag } from 'next/cache';
import Image from 'next/image';

// eslint-disable-next-line @next/next/no-async-client-component
const FormCase = async () => {
  const createCase = async (data: FormData) => {
    'use server';

    const name = data.get('name') as string;
    const description = data.get('description') as string;
    const startDate = data.get('startDate') as string;

    await postCase({name, description, startDate, status: 'OPEN'})
  };

  return (
    <div className='min-h-screen bg-[#F2F4FE] flex items-center justify-center p-4'>
      <div className='max-w-3xl'>
        <div className='flex justify-center mb-8'>
          <Image src='/logo.png' width={70} height={70} alt={'logo'} />
        </div>
        <div className='bg-white w-full rounded-lg p-8 mb-8'>
          <div className='flex flex-col items-center gap-1 mb-8'>
            <h1 className='text-3xl text-gray-900 font-bold uppercase'>Crear Caso</h1>
          </div>
          <form action={createCase} className='grid gap-y-4 items-center w-full'>
            <div className='flex flex-col gap-4 w-96'>
              <Input type='text' label='Nombre' name='name' isRequired />
              <Textarea variant='faded' label='Descripcion' name='description' placeholder='Ingrese su descripcion' isRequired />
              <Input type='date' name='startDate' isRequired description='Ingresar fecha de inicio' />
            </div>
            <Button type='submit' color='primary' className='w-full col-span-2 font-bold uppercase'>
              Registrar Caso
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCase;
