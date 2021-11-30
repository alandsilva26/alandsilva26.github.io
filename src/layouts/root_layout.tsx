import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps): JSX.Element => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default RootLayout;
