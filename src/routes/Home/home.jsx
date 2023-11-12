import  { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';



function Home() {
  
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div classname="caixa">
      <Button variant="primary" onClick={handleShow}>
        Abrir Formulário Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Endereço de E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu E-mail" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar Formulário
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
