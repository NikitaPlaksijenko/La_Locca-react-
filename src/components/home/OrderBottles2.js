import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/home/OrderBottles2.css';

const OrderBottles2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='cursor-pointer order-bottles2'
        onClick={handleShow}
      />

      <Modal dialogClassName='order-modal'
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Bottles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              {[1, 2, 3].map((val) => {
                return (
                  <div class="col">
                    <div className='bottle-image m-auto'>
                      <img className='w-100'
                        src={require(`../../assets/${val}.png`)}
                        alt='Bottle'
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderBottles2;