import { NavLink, Outlet } from 'react-router-dom';

export default function ExercisesPage() {
  return (
    <>
      <h1>exercises</h1>
      <ul>
        <li>
          <NavLink to="bodyparts">Body parts</NavLink>
        </li>
        <li>
          <NavLink to="muscles">Muscles</NavLink>
        </li>
        <li>
          <NavLink to="equipment">Equipment</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
