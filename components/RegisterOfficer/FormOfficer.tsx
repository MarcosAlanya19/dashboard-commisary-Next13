'use client';

import { Button } from '@nextui-org/react';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';
import FormField from '../shared/FormField';

const initialValues = {
  name: '',
  description: '',
  start_date: '',
  status: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es obligatorio'),
  description: Yup.string().required('La descripción es obligatoria'),
  start_date: Yup.date().required('La fecha de inicio es obligatoria').typeError('Ingrese una fecha válida'),
  status: Yup.string().required('El estado es obligatorio'),
});

const FormOfficer = () => {


  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log('Datos válidos:', values);

    resetForm();
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
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {(formikProps) => (
              <Form className='grid gap-y-4 items-center w-full'>
                <div className='flex flex-col gap-4 w-96'>
                  <FormField type='text' label='Nombre' name='name' formikProps={formikProps} />
                  <FormField type='text' label='Descripción' name='description' formikProps={formikProps} />
                  <FormField type='text' label='Fecha de Inicio' name='start_date' formikProps={formikProps} />
                  <FormField type='text' label='Estado' name='status' formikProps={formikProps} />
                </div>
                <Button type='submit' color='primary' className='w-full col-span-2 font-bold uppercase'>
                  Registrar Caso
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormOfficer;
