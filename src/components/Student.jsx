/* eslint-disable react/prop-types */
/* prop types for pass accurate data */

/* default props 
are default values for props incase they are not passed from the parent component*/




import  PropTypes from 'prop-types'

function Student (props) {
    return (
        <div className="studentz">
            <p>
                Name :{props.name}
            </p>
            <p>Age : {props.age} </p>
            <p>Student : {props.Student} </p> 
        </div>
    );


}
Student.propTypes = {
    name : PropTypes.string,
    age :PropTypes.number,
    Student :PropTypes.string,
}

Student.defaultProps = {
    name : "guest ",
    age : [3],
    Student : "no",
  }

  /*  conditional rendering  in react  */
  

  



export default Student 
/* props is a giong to be a javascript object */
