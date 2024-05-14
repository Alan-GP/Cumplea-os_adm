import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Plantilla2({ children }) {

    return (
        <Layout>
            {children}
            <Footer style={{ textAlign: 'center' }}>
            FiestaPerfecta © {new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};