import { Button } from 'antd';

export const CustomButton = ({ children, className, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      {children}
    </Button>
  );
};
