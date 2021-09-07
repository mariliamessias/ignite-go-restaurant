import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

type ModalEditFoodProps = {
  setIsOpen : () => void,
  handleUpdateFood: (food: ChangeFood) => void,
  isOpen: boolean,
  editingFood: FoodType
}

type FoodType = {
  id : number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string
}

type ChangeFood = {
  name: string,
  description: string,
  price: number,
  image: string
}

function ModalEditFood(props: ModalEditFoodProps){

  const formRef = useRef<FormHandles>(null)
  const handleSubmit = async (data: ChangeFood) => {
    props.handleUpdateFood(data);
    props.setIsOpen();
  };

    return (
      <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={props.editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalEditFood;
