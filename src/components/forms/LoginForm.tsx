import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Checkbox, Form, Input, message } from 'antd';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../../app/context';
import { auth } from '../../fakeApi/auth';
import { authUtils } from '../../utils/authUtils';
import Portal from '../Portal';
import FormControl from './FormControl';

const schema = Yup.object().shape({
  username: Yup.string().min(3).required(),
  password: Yup.string().min(4).required(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [formError, setFormError] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  const onSubmit = async (data: any) => {
    try {
      const response: Response = await auth.login(data);
      if (response.status === 200) {
        const authData = await response.json();
        setIsLoggedIn(true);
        localStorage.setItem('token', authData.token);
        authUtils.setTokenToCookie(authData.token);
        message.success('This is a success message');
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.log(error);
      setFormError(error.message);
      setIsLoggedIn(false);
    }
  };

  return (
    <Form
      name='login-in'
      initialValues={{ remember: true }}
      layout='vertical'
      onFinish={handleSubmit(onSubmit)}
      autoComplete='off'
    >
      {formError && (
        <Alert
          message='Login Failed'
          description={formError}
          type='error'
          closable
          onClose={() => {
            setFormError(null);
          }}
          style={{ marginBottom: '24px' }}
        />
      )}
      <FormControl name='username' control={control} errors={errors['username']}>
        <Input size='large' placeholder={'Username'} style={{ borderRadius: 8 }} />
      </FormControl>
      <FormControl name='password' control={control} errors={errors['password']}>
        <Input.Password size='large' placeholder={'Password'} style={{ borderRadius: 8 }} />
      </FormControl>
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          size='large'
          htmlType='submit'
          style={{ width: '100%', borderRadius: 8 }}
          loading={isValidating}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
