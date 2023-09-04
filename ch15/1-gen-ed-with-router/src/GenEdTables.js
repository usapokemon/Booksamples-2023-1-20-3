import React, { Component } from 'react';
//import { Selector } from './Selector';
import { CourseDisplay } from './CourseDisplay';
//import { SupplierDisplay } from './SupplierDisplay';
import {Routes, Route, NavLink} from "react-router-dom";

export default class GenEdTables extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Acourses: [
                { id: 1,
                  description: "First Year Experience",
                  semester: "",
                  prefix: "FYE",
                  number: "",
                  grade: ""
                }, 
                { id: 2,
                  description: "English Composition I",
                  semester: "",
                  prefix: "WRT",
                  number: "120",
                  grade: ""
                }, 
                { id: 3,
                  description: "English Composition II",
                  semester: "",
                  prefix: "WRT",
                  number: "200",
                  grade: ""
                }, 
                { id: 4,
                  description: "Mathematics",
                  semester: "",
                  prefix: "MAT",
                  number: "151",
                  grade: ""
                }, 
                { id: 5,
                  description: "Interdisciplinary",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                }, 
                { id:6,
                  description: "Divierse Communitites",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                } 
                
            ],
            Dcourses: [
                { id: 1,
                  description: "Science I",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                }, 
                { id: 2,
                  description: "Science II",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                }, 
                { id:3,
                  description: "Behavior & Social Science I",
                  semester: "",
                  prefix: "T",
                  number: "",
                  grade: ""
                }, 
                { id: 4,
                  description: "Behavior & Social Science II",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                }, 
                { id: 5,
                  description: "Humanity I",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                }, 
                { id: 6,
                  description: "Humanity II",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                } ,
                { id: 7,
                  description: "Art",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                } 
                
                    ],
            Ocourses: [
                { id: 1,
                  description: "Writing Emphasis I",
                  semester: "",
                  prefix: "ENG",
                  number: "",
                  grade: ""
                }, 
                { id: 2,
                  description: "Writing Emphasis II",
                  semester: "",
                  prefix: "WRT",
                  number: "",
                  grade: ""
                }, 
                { id: 3,
                  description: "Writing Emphasis III",
                  semester: "",
                  prefix: "WRT",
                  number: "",
                  grade: ""
                }, 
                { id: 4,
                  description: "Speaking Emphasis I",
                  semester: "",
                  prefix: "SPK",
                  number: "",
                  grade: ""
                }, 
                { id: 5,
                  description: "Speaking Emphasis II",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                }, 
                { id: 6,
                  description: "Speaking EMphasis III",
                  semester: "",
                  prefix: "",
                  number: "",
                  grade: ""
                } 
                
                     ]
        }
        this.idCounter = 50;
    }

    saveData = (collection, item) => {
      console.log("*** Collection: " + collection);
      console.log("*** Item:" + item);
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
                      
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
      return (
        <div>
            <div>
              <h1 className="bg-primary text-white text-center p-4 m-4">Display GenEd Courses</h1>
            </div>
            <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}} >
              
              <div>
                <NavLink to="/Academic" className="btn btn-sm m-2">Academic Foundation</NavLink>
                    | {" "}
                <NavLink to="/Distributive" className="btn btn-sm m-2">Distributive</NavLink>
                      | {" "}
               <NavLink to="/Others" className="btn btn-sm m-2">Other Courses</NavLink>
              </div>
              
            </nav>

            <Routes>
              <Route path="/Academic" element={<CourseDisplay 
                    name="Academic Foundation"
                    course={ this.state.Acourses }
                    saveCallback={ c => this.saveData("Acourses", c) }
                    deleteCallback={ c => this.deleteData("Acourses", c) } />} />
              <Route path="/Distributive" element={<CourseDisplay
                    name="Distributive Requirement"
                    course={ this.state.Dcourses }
                    saveCallback={ c => this.saveData("Dcourses", c) }
                    deleteCallback={ c => this.deleteData("Dcourses", c) } />} />
              <Route path='Others' element={ <CourseDisplay
                    name="Additional Requirement"
                    course={ this.state.Ocourses }
                    saveCallback={ c => this.saveData("Ocourses", c) }
                    deleteCallback={ c => this.deleteData("Ocourses", c) } />}  />
            </Routes>
               
            
        </div>)
        
    }
}
