import { Button, Modal } from 'antd';
import React from 'react';
import Portal from '../Portal';

interface ICreateAccountModalProps {
  isOpen: boolean;
  title: string;
}

const CreateAccountModal = ({ isOpen, title }: ICreateAccountModalProps) => {
  return (
    <Portal wrapperId='modal'>
      <Modal
        open={isOpen}
        title={title}
        footer={[
          <Button key='back'>Return</Button>,
          <Button key='submit' type='primary'>
            Submit
          </Button>,
          <Button key='link' type='primary'>
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Portal>
  );
};

export default CreateAccountModal;
