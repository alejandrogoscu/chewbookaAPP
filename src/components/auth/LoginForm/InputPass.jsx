import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './loginform.css';

export const InputPass = ({ className, value, onChange, name, placeholder }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
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
    </Space>
  );
};
