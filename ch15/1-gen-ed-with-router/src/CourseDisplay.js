import React, { Component } from "react";
import { ATable } from "./ATable"
import { CourseEditor } from "./CourseEditor";

export class CourseDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }

    createCourse = () => {
        this.setState({ showEditor: true, selectedCourse: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveCourse = (course) => {
        this.props.saveCallback(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <CourseEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveCourse }
                cancelCallback={ this.cancelEditing } />
        } else {
            console.log("-- in CourseDisplay --");
            return <div className="m-2">
                <ATable name={ this.props.name }
                    courses={ this.props.course }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />            
                {/*<div className="text-center">
                    <button className="btn btn-primary m-1" 
                        onClick={ this.createCourse }>
                        Create Course
                    </button>
                </div>  */}                      
            </div>
        }
    }
}
