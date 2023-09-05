import React, {Component} from 'react';
import CourseRow from './CourseRow';

export default class FilterTable extends Component {
    
    render () {
        const coursePrefix = this.props.coursePrefix;
        const tookFlag = this.props.tookFlag;
       
        const rows = [];
        const allCourses = this.props.courses;
       
        allCourses.forEach((course) => {
            if (course.name.indexOf(coursePrefix) === -1) {
                console.log("in FilterTable - pass 1")
                return;
             }
            if (!(course.took === tookFlag)) {
                console.log("in FilterableTable - pass 2 ")
                return;
            }
            
            rows.push(
            <CourseRow
                course={course}
                key={course.name}
                toggleTookChange = 
                { this.props.toggleTookChange }
            />
            );
           
        });
    
        return (
            <React.Fragment>
            <table className="table table-striped table-bordered table-sm p-2 m-2">
            <thead className="bg-info text-white">
                <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Desc</th>
                <th>Took</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>
         </React.Fragment>
            
        );
            
       
        
    }
      
        
    
}
/*
export const COURSES = [
    {category: 'Major', name: 'CSC141', took: true, desc:'Java I'},
    {category: 'Major', name: 'CSC142', took: true, desc:'Java II'},
    {category: 'Major', name: 'CSC240', took: false, desc:'Java III'},
    {category: 'Major', name: 'CSC241', took: false, desc:'Data Structure'},
    {category: 'GenEd', name: 'ESS200', took: true, desc:'Geology'},
    {category: 'GenEd', name: 'ART100', took: false, desc:'Music Appreciation'},
  ];
  */