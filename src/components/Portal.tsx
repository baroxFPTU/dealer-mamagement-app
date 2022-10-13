import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  wrapperId: string;
}

const Portal = ({ children, wrapperId = 'root' }: IPortalProps) => {
  let element = document.getElementById(wrapperId);
  if (!element) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    element = wrapperElement;
  }

  return createPortal(children, element);
};

export default Portal;
