import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/home/OrderBottles1.css';

const OrderBottles1 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='cursor-pointer order-bottles1'
        onClick={handleShow}
      />

      <Modal dialogClassName='order-modal'
        show={show}
        onHide={handleClose}
        centered
        style={{ height: '100vh', width: '100vw' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Bottles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              {[1, 2, 3].map((val) => {
                return (
                  <OverlayTrigger
                    key='right'
                    placement='right'
                    delay={{ show: 100, hide: 150 }}
                    overlay={
                     
                      <table style={{ height: '20px', width: '40px', opacity: '0.9' }}>
                        <tr >
                          <td style={{ backgroundColor: '#804000', backgroundImage: 'linear-gradient(to bottom right, #804000, #cc9900)' }}><img src={require(`../../assets/${val}.png`)} style={{ width: '150px', height: '450px' }} alt='tipbottle' /></td>
                          <td style={{ backgroundColor: '#e0e0d1', backgroundImage: 'linear-gradient(to bottom left, #b7b795, #e0e0d1)' }}><p style={{ color: 'black' }}> Please enjoy them.</p></td>
                        </tr>
                      </table>
                    
                    }
                  >
                    <div class="col">
                      <div className='bottle-image m-auto'>
                        <img className='w-100'
                          src={require(`../../assets/${val}.png`)}
                          alt='Bottle'
                          style={{ height: '120px' }}
                        />
                      </div>
                    </div>
                  </OverlayTrigger>
                )
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderBottles1;
