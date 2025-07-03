import { Input } from 'antd';

export const CustomInput = ({ className, type, name, value, onChange, placeholder, ...rest }) => {
  return (
    <Input
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      size="middle"
      {...rest}
    />
  );
};
