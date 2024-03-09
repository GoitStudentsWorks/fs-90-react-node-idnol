import sprite from 'assets/sprite-2.svg';

import { AddProductSuccess } from '../../AddProductSuccess/AddProductSuccess';

import {
  ModalCloseBtn,
  ModalSvg,
  Icon,
  Wrapper,
  LabelBox,
  BoxCalories,
  InputCalories,
  Grams,
  CountsPro,
  CaloriesText,
  Value,
  BtnBox,
  FormBtnAdd,
  FormBtnCancel,
  NameBox,
  Name,
} from './AddProductForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSuccess } from '../../../redux/diary/diarySelectors.js';
import { addProduct } from '../../../redux/diary/api.js';
import { ToastContainer, toast } from 'react-toastify';

export const AddProductForm = ({ onClose, title, calories, id }) => {
  const [isInputValue, setIsInputValue] = useState('');
  const [isCaloriesValue, setIsCaloriesValue] = useState('0');
  const [isCalories, setIsCalories] = useState(calories);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const success = useSelector(selectSuccess);

  const dispatch = useDispatch();

  const handleValue = (evt) => {
    const value = evt.currentTarget.value;
    setIsInputValue(value);
    const val = isCalories;

    const calories = Math.round((value * val) / 100);
    setIsCaloriesValue(calories);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const data = {
        product: id,
        weight: +isInputValue,
      };

      // Wait for the completion of the addProduct async action
      const resultAction = await dispatch(addProduct(data));

      // Check if the action was successful
      if (addProduct.fulfilled.match(resultAction)) {
        console.log(data);
        setIsInputValue('');
        setIsOpenSuccess(true);
        console.log('Success ', success);
      } else {
        setIsOpenSuccess(false);
        setIsCaloriesValue('0');
        toast.error('Oops, something went wrong');
        console.log('Success ', success);
      }
    } catch (error) {
      setIsOpenSuccess(false);
      setIsCaloriesValue('0');
      toast.error('Oops, something went wrong');
    }
  };

  const comboModal = () => {
    onClose();
    setIsOpenSuccess(false);
  };

  return (
    <>
      <ModalCloseBtn onClick={onClose}>
        <ModalSvg>
          <Icon href={`${sprite}#x-modal`} />
        </ModalSvg>
      </ModalCloseBtn>

      {!isOpenSuccess && (
        <Wrapper>
          <form onSubmit={onSubmit}>
            <LabelBox>
              <NameBox>
                <Name>{title}</Name>
              </NameBox>

              <BoxCalories>
                <InputCalories
                  name="number"
                  required
                  value={isInputValue}
                  onChange={handleValue}
                />
                <Grams>grams</Grams>
              </BoxCalories>
            </LabelBox>
            <CountsPro>
              <CaloriesText>Calories:</CaloriesText>
              <Value>{isCaloriesValue}</Value>
            </CountsPro>

            <BtnBox>
              <FormBtnAdd type="submit">Add to diary</FormBtnAdd>
              <FormBtnCancel type="button" onClick={onClose}>
                Cancel
              </FormBtnCancel>
            </BtnBox>
          </form>
        </Wrapper>
      )}
      {isOpenSuccess && (
        <AddProductSuccess
          calories={isCaloriesValue}
          isOpen={isOpenSuccess}
          onClose={() => comboModal()}
        />
      )}
      <ToastContainer />
    </>
  );
};
