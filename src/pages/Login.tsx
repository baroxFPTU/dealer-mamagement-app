import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import LoginForm from '../components/forms/LoginForm';

const { Title } = Typography;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  height: 100vh;
`;

const FormWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Title>Login</Title>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
