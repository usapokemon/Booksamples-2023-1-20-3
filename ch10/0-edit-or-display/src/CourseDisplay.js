import React, { Component } from "react";
//import { GenEdTables } from "./GenEdTables"
import { CourseEditor } from "./CourseEditor";
import { CourseTable } from "./CourseTable";

export default class CourseDisplay extends Component {

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
            return <div className="p-2 b-2 m-2">
                <CourseTable 
                    name={this.props.name}
                    courses={ this.props.courses }
                    credit = { this.props.credit }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />                                 
            </div>
        }
    }
}
