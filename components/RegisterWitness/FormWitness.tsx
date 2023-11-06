'use client';

import { Button, Chip, Select, SelectItem } from '@nextui-org/react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';
import FormField from '../shared/FormField';

const animals = [{ value: 'hola', label: 'recontraHola' }];

const initialValues = {
  dni: '',
  name: '',
  address: '',
  email: '',
  phone: '',
  case_id: '',
};

const validationSchema = Yup.object().shape({
  dni: Yup.string().required('El DNI es obligatorio').max(8, 'El DNI no puede tener más de 8 caracteres'),
  name: Yup.string().required('El nombre es obligatorio'),
  phone: Yup.string().required('El celular es obligatorio').max(9, 'El celular no puede tener más de 9 caracteres'),
  address: Yup.string().required('La dirección es obligatoria'),
  email: Yup.string().email('Ingrese una dirección de correo válida').required('El correo es obligatorio'),
  case_id: Yup.string().required('Seleccione un caso'),
});

const FormWitness = () => {
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
            <h1 className='text-3xl text-gray-900 font-bold uppercase'>Crear Testigo</h1>
          </div>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {(formikProps) => (
              <Form className='grid gap-y-4 items-center w-full'>
                <div className='flex flex-col gap-4 w-96'>
                  <FormField type='text' label='DNI' name='dni' formikProps={formikProps} />
                  <FormField type='text' label='Nombre' name='name' formikProps={formikProps} />
                  <FormField type='text' label='Celular' name='phone' formikProps={formikProps} />
                  <FormField type='text' label='Dirección' name='address' formikProps={formikProps} />
                  <FormField type='email' label='Email' name='email' formikProps={formikProps} />
                  <div className='w-full'>
                    <Field as={Select} name='case_id'>
                      {animals.map((animal) => (
                        <SelectItem key={animal.value} value={animal.value}>
                          {animal.label}
                        </SelectItem>
                      ))}
                    </Field>
                    {formikProps.touched.case_id && formikProps.errors.case_id && <Chip color='danger'>{formikProps.errors.case_id}</Chip>}
                  </div>
                </div>
                <Button type='submit' color='primary' className='w-full col-span-2 font-bold uppercase'>
                  Registrar testigo
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormWitness;
