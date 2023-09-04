import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStudent, setCredit } from "./studentSlice";
import styles from './student.module.css';

export function InputStudentData() {
  const {studentName} = useSelector((state) => state.student);
  const {studentCredit} = useSelector((state) => state.credit);
  const dispatch = useDispatch();
  
  //const [incrementAmount, setIncrementAmount] = useState('2');
  //const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
     
      <div className={styles.row}>
        Enter Student Name:
        <input
          className={styles.textbox}
          type="text"
          aria-label="Enter student name"
          value={studentName}
          onChange={(e) => dispatch(setStudent(e.target.value))}
        />
        <br/>
        <div className={styles.row}>
        Enter Transferred Credits:
        <input
          className={styles.textbox}
          aria-label="Enter transferred credits"
          type="number"
          value={studentCredit}
          onChange={(e) => dispatch(setCredit(e.target.value))}
        />
       
        </div>
      </div>
    </div>
  );
}
