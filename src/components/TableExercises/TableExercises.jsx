import { useDispatch, useSelector } from 'react-redux';
import { selectExercises } from '../../redux/diary/diarySelectors';
import {
  BodyPartItem,
  BurnedCaloriesItem,
  DeleteBtn,
  DeleteItem,
  EquipmentItem,
  Header,
  HeaderBodyPart,
  HeaderBurnedCalories,
  HeaderEquipment,
  HeaderName,
  HeaderTarget,
  HeaderTime,
  NameItem,
  RowItem,
  ScrollContainer,
  SvgBasket,
  Table,
  TargetItem,
  Thead,
  TimeItem,
} from './TableExercises.styled';
import { removeExercise } from '../../redux/diary/api';
import sprite from 'assets/sprite-2.svg'

export const TableExercises = () => {
  const exercisesItems = useSelector(selectExercises);
  console.log(exercisesItems);
  const dispatch = useDispatch();
  return (
    <>
       <Header>
          <HeaderBodyPart>Body Part</HeaderBodyPart>
          <HeaderEquipment>Equipment</HeaderEquipment>
          <HeaderName>Name</HeaderName>
          <HeaderTarget>Target</HeaderTarget>
          <HeaderBurnedCalories>Burned Calories</HeaderBurnedCalories>
          <HeaderTime>Time</HeaderTime>
          <p> </p>
        </Header>
      <ScrollContainer>
        <Table>
          <Thead>
            <tr>
              <th>Body Part</th>
              <th>Equipment</th>
              <th>Name</th>
              <th>Target</th>
              <th>Burned Calories</th>
              <th>Time</th>
              <th>Delete</th>
            </tr>
          </Thead>

          <tbody>
            {exercisesItems.map((exercise) => (
              <RowItem key={exercise._id}>
                <BodyPartItem>{exercise.exercise.bodyPart}</BodyPartItem>
                <EquipmentItem>{exercise.exercise.equipment}</EquipmentItem>
                <NameItem>{exercise.exercise.name}</NameItem>
                <TargetItem>{exercise.exercise.target}</TargetItem>
                <BurnedCaloriesItem>{exercise.calories}</BurnedCaloriesItem>
                <TimeItem>{exercise.time}</TimeItem>
                <DeleteItem>
                  <DeleteBtn onClick={() => dispatch(removeExercise({ id: exercise._id, calories: exercise.calories, time: exercise.time }))}>
                    <SvgBasket>
                      <use href={`${sprite}#trash`} />
                    </SvgBasket>
                  </DeleteBtn>
                </DeleteItem>
              </RowItem>
            ))}
          </tbody>
        </Table>
      </ScrollContainer>
    </>
  );
};
