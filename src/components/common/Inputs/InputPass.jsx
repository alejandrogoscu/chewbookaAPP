import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { KeyOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const InputPass = ({ className, name, value, onChange, placeholder }) => {
  return (
    <Input.Password
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      size="middle"
      prefix={<KeyOutlined />}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  );
};
