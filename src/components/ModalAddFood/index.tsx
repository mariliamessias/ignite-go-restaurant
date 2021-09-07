import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

type ModalAddFoodProps = {
  setIsOpen : () => void,
  handleAddFood: (food: ChangeFood) => void,
  isOpen: boolean
}

type ChangeFood = {
  name: string,
  description: string,
  price: number,
  image: string
}

function ModalAddFood({setIsOpen, handleAddFood, isOpen}: ModalAddFoodProps) {

  const handleSubmit = async (data: ChangeFood) => {
    handleAddFood(data);
    setIsOpen();
  };

  const formRef = useRef<FormHandles>(null);

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalAddFood;
