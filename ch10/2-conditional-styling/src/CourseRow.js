//import { constructor } from 'core.js';
import React, {Component} from 'react';


export default class CourseRow extends Component {
  
    render() {
        
        const course = this.props.course;
        
        const name = course.took ?
          course.name :
          <span style={{color: 'red'}}>
            {course.name}
          </span>;
          
        return (
          <React.Fragment>
            <tr >
              <td>{course.category}</td>
              <td>{name}</td>
              <td>{course.desc}</td>
              <td>
                <input type='checkbox' checked={ course.took } 
                  onChange= { () => this.props.toggleTookChange(course) }
                  />
              </td>
            </tr>
            
          </React.Fragment>
          
        );
    }
}