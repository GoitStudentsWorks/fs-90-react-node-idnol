import { useState, useEffect } from 'react';
import {
  ExercisesUl,
  ExercisesLi,
  StyledSpanCategories,
  ExercisesTitle,
  ExercisesContainer,
  Button,
  ButtonIcon,
  ButtonContainer,
} from './ExercisesCategories.styled';
import { useDispatch, useSelector } from 'react-redux';
import { clearExercisesFilter } from '../../../redux/exercises/filterSlice';

import sprite from 'assets/sprite-2.svg';

export default function ExercisesCategories({ onClick }) {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('Body parts');

  const bodyPartFilter = useSelector((state) => state.filter.exercisesFilter);

  useEffect(() => {
    onClick(activeCategory);
  }, [onClick, activeCategory]);

  const handleClick = (category) => {
    onClick(category);
    setActiveCategory(category);
  };

  const handleBackButtonClick = () => {
    dispatch(clearExercisesFilter());
  };

  return (
    <ExercisesContainer>
      {bodyPartFilter !== '' && (
        <Button onClick={handleBackButtonClick}>
          <ButtonContainer>
            <ButtonIcon>
              <use href={`${sprite}#arrow-left-ex`} />
            </ButtonIcon>
            back
          </ButtonContainer>
        </Button>
      )}
      <ExercisesTitle>
        {bodyPartFilter === '' ? 'Exercises' : bodyPartFilter}
      </ExercisesTitle>
      <ExercisesUl>
        <ExercisesLi>
          <StyledSpanCategories
            className={activeCategory === 'Body parts' ? 'active' : ''}
            data-target="Body parts"
            onClick={() => {
              handleClick('Body parts');
              handleBackButtonClick();
            }}
          >
            Body parts
          </StyledSpanCategories>
        </ExercisesLi>
        <ExercisesLi>
          <StyledSpanCategories
            className={activeCategory === 'Muscles' ? 'active' : ''}
            data-target="Muscles"
            onClick={() => {
              handleClick('Muscles');
              handleBackButtonClick();
            }}
          >
            Muscles
          </StyledSpanCategories>
        </ExercisesLi>
        <ExercisesLi>
          <StyledSpanCategories
            className={activeCategory === 'Equipment' ? 'active' : ''}
            data-target="Equipment"
            onClick={() => {
              handleClick('Equipment');
              handleBackButtonClick();
            }}
          >
            Equipment
          </StyledSpanCategories>
        </ExercisesLi>
      </ExercisesUl>
    </ExercisesContainer>
  );
}
