import { useDispatch } from 'react-redux';
import {
  ContainerSubcategoriesImage,
  ContainerSubcategoriesLi,
  ContainerTextSubcategories,
  SubcategoriesH3,
  SubcategoriesH4,
  WrapperExes,
} from './ExercisesSubcategoriesItem.styled';
import { setExercisesFilter } from '../../../../redux/exercises/filterSlice';

export default function ExercisesSubcategoriesItem({ subcategory }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setExercisesFilter(subcategory.name));
  };

  return (
    <ContainerSubcategoriesLi onClick={handleClick}>
      <WrapperExes>
      <ContainerSubcategoriesImage
        src={subcategory.imgURL}
        alt={subcategory.name}
      />
      <ContainerTextSubcategories>
        <SubcategoriesH3 isLong={subcategory.name.length > 16}>{subcategory.name}</SubcategoriesH3>
        <SubcategoriesH4>{subcategory.filter}</SubcategoriesH4>
      </ContainerTextSubcategories>
      </WrapperExes>
    </ContainerSubcategoriesLi>
  );
}
