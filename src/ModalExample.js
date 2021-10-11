import React, { useState } from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '@material-ui/core/Button'

const ModalExample = (props) => {
    const {
        buttonLabel,
        className,
        data
      } = props;
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggle}>Detalles de Heroe{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Detalles de tu heroe</ModalHeader>
        <ModalBody>
        <h6>Peso: {data.appearance.weight[1]}</h6>
        <h6>Altura: {data.appearance.height[1]}</h6>
        <h6>Nombre: {data.appearance.name}</h6>
        <h6>Alias: {data.biography.aliases[0]}</h6>
        <h6>Color ojos:  {data.appearance.['eye-color']}</h6>
        <h6>Color de cabello: {data.appearance.['hair-color']}</h6>
        <h6>Lugar de trabajo: {data.work.base}</h6>
         
          
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;