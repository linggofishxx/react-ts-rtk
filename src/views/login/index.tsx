/*
 * @Descripttion: ''
 * @Author: 王广徽
 * @Date: 2022-09-15 16:11:30
 * @LastEditors: 王广徽
 * @LastEditTime: 2022-09-16 15:00:07
 */
import { Button, Checkbox, Form, Input } from 'antd';
import { token } from '../../config/token';
import './login.scss';

export default function login() {
  const getCheckCode = () =>
    fetch(
      'api/manage/login/getPictureCheckCode',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
      }
    ).then(res => res.json())

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm(); 

  const [imgUrl, setImgUrl] = useState('4');
  let picCheckKey: string = '';

  const createCheckCode = async () => {
    const resp = await getCheckCode();
    setImgUrl('data:image/gif;base64,' + resp.Data.imagebase64);
    picCheckKey = resp.Data.picCheckKey;
    form.setFieldsValue({ username: 'wanggh', password: 'afsdafsd', 'pictureCheckCode': '1231231'})
  };

  const picbox = (
    <div className='image_box' onClick={createCheckCode}>
      <img src={imgUrl} className="image" />
    </div>
  )

  return (
    <div className="login">
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login_form"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  />
        </Form.Item>

        <Form.Item
          label="PictureCheckCode"
          name="pictureCheckCode"
          rules={[{ required: true, message: 'Please input your pictureCheckCode!' }]}
        >
          <Input addonAfter={picbox} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>


  )
}