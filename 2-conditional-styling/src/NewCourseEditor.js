import React, { Component } from "react";


export default class CourseEditor extends Component {

    constructor(props) {
        super(props);
        console.log("++ In CourseEditor");
        this.state = {
            newCourse: {
                category: props.course.category || "",
                name: props.course.name || "", 
                took: false, 
                desc: props.course.desc || ""
            }


        }
    }

    handleChange = (ev) => {
        ev.persist();
        this.setState(state => state.newCourse[ev.target.name] =  ev.target.value);
    }
    handleTook = (ev) => {
        ev.persist();
        this.setState(state => state.newCourse[ev.target.name] =  true);
    }

    handleClick = () => {
        this.props.saveCallback(this.state.newCourse);
    }

    render() {
        console.log("++ in NewCourseEditor - pass render");
        return (
           
        <div className="m-2">
                    
            <div className="form-group">
                <label>Category</label>
                <input className="form-control" name="category"
                    value={ this.state.newCourse.category }
                    onChange={ this.handleChange } />
            </div>   
            {console.log("pass Category")};
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" name="name"
                    value={ this.state.newCourse.name }
                    onChange={ this.handleChange } />
            </div>           
            {console.log("pass Name")}  ; 
            
           
            <div className="form-group">
                <label>Check if took</label>
                <input type='checkbox' name="took"
                    value={ this.state.newCourse.took }
                    onChange={ this.handleTook } />
                
            </div>       
            {console.log("pass took")};
            <div className="form-group">
                <label>Description</label>
                <input className="form-control" name="desc"
                    value={ this.state.newCourse.desc }
                    onChange={ this.handleChange } />
            </div>  
            <div className="text-center">
                <button className="btn btn-primary m-1" 
                        onClick={ ()=>this.props.saveCallback(this.state.newCourse) }>
                    Save
                </button>
                <button className="btn btn-secondary" 
                        onClick={ this.props.cancelCallback }>
                    Cancel
                </button>                
               </div>
        </div>
       
        )
    }
}
