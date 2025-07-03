import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

export const InputPass = ({ className, value, onChange, name, placeholder }) => {
  return (
    <Input.Password
      className={className}
      size="large"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  );
};
