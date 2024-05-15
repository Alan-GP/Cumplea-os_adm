import React, { useEffect, useState } from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { getAuth } from "firebase/auth";
import Meta from 'antd/es/card/Meta';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      // console.log('Usuario autenticado:', currentUser.toJSON());
      setUser(currentUser.toJSON());
    }
  }, []);

  // useEffect(() => {
  //   async function insertarUsuario() {
  //     try {
  //       const response = await post('/user/newUser', {
  //         uid: user.uid,
  //         photoURL: user.photoURL,
  //         phoneNumber: user.phoneNumber,
  //         email: user.email,
  //         displayName: user.displayName,
  //       });

  //       console.log('Respuesta del servidor:', response);
  //     } catch (error) {
  //       console.error('Error al insertar el usuario:', error);
  //     }
  //   }

  //   insertarUsuario();
  // }, []);



  if (!user) {
    return <div>No hay usuario autenticado</div>;
  }

  return (
    <Card
      style={{ width: 320 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={user.photoURL} icon={<UserOutlined />} />}
        title={user.displayName}
        description={user.email}
      />
    </Card>
  );
}