import { Input } from '@nextui-org/react';
import { Field, FieldProps } from 'formik';
import React from 'react';
import ErrorMessageField from './ErrorMessageField';

interface FormFieldWithErrorMessageProps {
  label: string;
  name: string;
  className?: string;
  type: 'text' | 'email';
  formikProps: {
    touched: { [key: string]: boolean };
    errors: { [key: string]: string };
  };
}

const FormField: React.FC<FormFieldWithErrorMessageProps> = (props) => {
  return (
    <div className={props.className}>
      <Field name={props.name}>
        {({ field }: FieldProps) => (
          <>
            <Input {...field} type={props.type} label={props.label} isRequired />
            <ErrorMessageField fieldName={props.name} formikProps={props.formikProps}>
              {props.formikProps.errors[field.name]}
            </ErrorMessageField>
          </>
        )}
      </Field>
    </div>
  );
};

export default FormField;
