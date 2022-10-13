import { Form } from 'antd';
import React from 'react';
import { Control, Controller, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import { IHasChildren } from '../../types/common';

interface IFormControlProps extends IHasChildren {
  name: string;
  control: Control;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const FormControl = ({ name, control, children, errors, ...props }: IFormControlProps) => {
  const validateStatus = errors?.message && 'error';
  const helpMessage = errors?.message;
  return (
    <Form.Item validateStatus={validateStatus} help={helpMessage?.toString()} hasFeedback>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (React.isValidElement(children)) {
            return React.cloneElement(children, { ...field });
          }
          return <>{children}</>;
        }}
        {...props}
      />
    </Form.Item>
  );
};

export default FormControl;
