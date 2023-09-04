import React from 'react';
import { useSelector } from 'react-redux';

export function DisplayStudentData() {

  const {credit} = useSelector((state) => state.credit);
  const {student} = useSelector((state) => state.student);

  //const dispatch = useDispatch();
  

  return (
    <div>
      <h1>
      The total transferred credits for {student} is {credit}.
      </h1>
      

    </div>
  );
}
