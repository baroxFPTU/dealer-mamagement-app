import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { Button, Checkbox, Form, Input } from 'antd';

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form
      name='login-in'
      initialValues={{ remember: true }}
      layout='vertical'
      onFinish={handleSubmit(onSubmit)}
      // onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item>
        <Controller
          name='username'
          control={control}
          render={({ field }) => (
            <Input {...field} size='large' placeholder={'Username'} style={{ borderRadius: 8 }} />
          )}
        />
        {/* <Input size='large' style={{ borderRadius: 8 }} /> */}
      </Form.Item>
      <Form.Item>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              size='large'
              placeholder={'Password'}
              style={{ borderRadius: 8 }}
            />
          )}
        />
      </Form.Item>
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          size='large'
          htmlType='submit'
          style={{ width: '100%', borderRadius: 8 }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
