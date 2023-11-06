import React from 'react'

interface ErrorMessageFieldProps {
  fieldName: string;
  formikProps: any;
  children: React.ReactNode;
}

const ErrorMessageField: React.FC<ErrorMessageFieldProps> = ({ fieldName, formikProps, children }) => {
  return (
    <div className='flex justify-center w-full mt-2'>
      {formikProps.touched[fieldName] && formikProps.errors[fieldName] && (
        <div className='bg-rose-500 text-white w-full text-center rounded-xl'>
          {children}
        </div>
      )}
    </div>
  );
};


export default ErrorMessageField
