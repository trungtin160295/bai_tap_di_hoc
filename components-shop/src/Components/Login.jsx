import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <img src="./src/img/icon-account.svg" alt="" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div>
          <h2>Đăng nhập</h2>
          <span>Nếu đã từng mua hàng trên Website trước đây,
             bạn có thể dùng tính năng  <a href="">"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng email nhé. </span>
        </div>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="email"
                placeholder="Email/SĐT của bạn"
                autoFocus
              />
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

