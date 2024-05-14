import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button, Image, Layout, Menu, theme } from 'antd';
import { useNotifi } from '../../context/notificacionesContext';
import { useAuth } from '../../context/authContext';
import { LogoutOutlined, NotificationOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;

const items = [
    { key: '1', label: 'Home', path: '/' },
];


export default function MainLayout() {

    const { openNotification } = useNotifi();
    const { logout } = useAuth();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center', background: '#49404F', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    <Image rel="preload" fetchpriority="high" height={40} width={40} alt="" src='Logo.webp' preview={false} style={{ marginTop: '-30px' }} />

                    <Menu
                        theme="light"
                        mode="horizontal"
                        style={{ flex: 1, minWidth: 0, background: '#49404F', fontSize: 20, fontWeight: 'bold' }}
                    >

                        {items.map(item => (
                            <Menu.Item key={item.key} style={{ color: 'white' }}>
                                <Link to={item.path}>{item.label}</Link>
                            </Menu.Item>
                        ))}

                    </Menu>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type='text' title='Notificaciones' onClick={openNotification} style={{ marginRight: 10, color: 'white' }}
                        shape="circle" icon={<NotificationOutlined />} />
                    <Button type='text' title='Cerrar sesión' onClick={onLogout} icon={<LogoutOutlined />} style={{ color: 'white' }} >
                        Salir
                    </Button>
                </div>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 380,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                        margin: '16px 0',
                    }}
                >
                    <Outlet />
                </div>
            </Content>

        </>
    )
}
