import React, { useEffect, useState } from 'react'
import { Col, Row, Avatar, List } from 'antd';
import { get } from '../../api/peticiones';

export default function Home() {

  const [datos, setDatos] = useState(null);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const respuesta = await get('/puntuacion/consultarPuntuacion');
        setDatos(respuesta);
      } catch (error) {
        console.error('La petición falló:', error);
      }
    }

    obtenerDatos();
  }, []); 

  return (
    <div >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <div className="ant-component-wrapper">
            <div className="ant-component" style={{ backgroundColor: '#FFDEB7', marginRight: 20 }}>
              <div className="ant-component-header" style={{ textAlign: 'center' }}>
                <h1>Clasificación</h1>
              </div>
              <Row gutter={[16, 16]} justify="center" align="bottom">
                <Col xs={20} sm={7} style={{ textAlign: 'center' }}>
                  <p>{datos && datos[1] && datos[1].nombre}</p>
                  <div style={{ backgroundColor: '#CFCDCA', height: '100px' }}>
                    <h2>2</h2>
                  </div>
                </Col>
                <Col xs={20} sm={7} style={{ textAlign: 'center', marginLeft: '10px', marginRight: '10px' }}>
                  <p>{datos && datos[0] && datos[0].nombre}</p>
                  <div style={{ backgroundColor: '#FFCE22', height: '150px' }}>
                    <h2>1</h2>
                  </div>
                </Col>
                <Col xs={20} sm={7} style={{ textAlign: 'center' }}>
                  <p>{datos && datos[2] && datos[2].nombre}</p>
                  <div style={{ backgroundColor: '#EE6400', height: '50px' }}>
                    <h2>3</h2>
                  </div>
                </Col>
              </Row>
            </div>
            <List
              dataSource={datos ? datos.slice(3, 10) : []}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={`${index + 4}.- ${item.nombre}`}
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}