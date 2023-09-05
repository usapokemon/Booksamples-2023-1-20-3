
import React, {Component} from 'react';
import FilterTable from './FilterTable';
import Search from './Search';
import ErrorBoundary from './ErrorBoundary';
import NewCourseEditor from './NewCourseEditor';

export class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        coursePrefix: '',   
        courses : [
          {category: 'Major', name: 'CSC141', took: true, desc:'Java I'},
          {category: 'Major', name: 'CSC142', took: true, desc:'Java II'},
          {category: 'Major', name: 'CSC240', took: false, desc:'Java III'},
          {category: 'Major', name: 'CSC241', took: false, desc:'Data Structure'},
          {category: 'GenEd', name: 'ESS200', took: true, desc:'Geology'},
          {category: 'GenEd', name: 'ART100', took: false, desc:'Music Appreciation'},
          {category: 'Minor', name: 'CST235', took: false, desc:'Web Technology'},
          {category: 'Minor', name: 'CST221', took: false, desc:'Database'},
        ],
        showEditor: false, // switch to Editing mode if true
        selectedCourse: null ,
        
      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.toggleTookChange = this.toggleTookChange.bind(this);
  }

  handleFilterTextChange(e) {
    console.log("In App line 21 - text changed" + e.target.value)
    this.setState({
      coursePrefix: e.target.value
    })
  }
  
  toggleTookChange (course)  {
      console.log("*** App.js - pass toggleTookChange ");
      console.log(course.took);
      this.setState (
      { 
        courses: this.state.courses.map ( oneCourse => {

          if (oneCourse.name === course.name) 
              return { ...course, took: !course.took} 
          else 
              return oneCourse ;
          
        })
          
      } );
      
    }
  // For the Edit function of a single course after they are displayed
  // not for createNewCourse
  /*startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }
  */
  createNewCourse = () => {
        this.setState({ showEditor: true, selectedCourse: {} })
    }

  cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

  saveCourse = (course) => {
        console.log("++ in App, save a course");
        console.log(course)
        this.setState({ showEditor: false, selectedCourse: course,
                        courses: [ ...this.state.courses, course]
        })        
    }
  

    

  render () {
    if ( this.state.showEditor ) {
      return  <div>
                    <NewCourseEditor key={this.state.selectedCourse.name}
                            course={this.state.selectedCourse} 
                            saveCallback={this.saveCourse}
                            cancelCallback={this.cancelEditing}
                    />  
              </div>;  
    } else {
      return (
        
          <ErrorBoundary className="App">
              <div>
                <Search
                  coursePrefix={this.state.coursePrefix}
                  onChangeCoursePrefix={this.handleFilterTextChange}
                />
              </div>
                <div>
                <FilterTable courses={this.state.courses}
                  coursePrefix={this.state.coursePrefix}
                  toggleTookChange= {this.toggleTookChange }
                  addNewCourse= {this.addNewCourse}
                  tookFlag= { false }
                />
                </div>

                <div>
                <FilterTable courses={this.state.courses}
                  coursePrefix={this.state.coursePrefix}
                  toggleTookChange= {this.toggleTookChange}
                
                  tookFlag={ true }
                />
              </div>
              <label>Click the butto below to add a new course.</label>
              <button className="btn btn-secondary" 
                        onClick={ this.createNewCourse } >
                    Add
              </button>    



          </ErrorBoundary>
    )}
  
  }
}

export default App;


