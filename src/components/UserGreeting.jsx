/* eslint-disable react/prop-types */
import  PropTypes from 'prop-types'

/* it is always good practice to add prop-types when adding props cause of debugging purpose */
/* props types in conditional rendering */
function UserGreeting (props) {


    const WelcomeMessage = <h2 className="stylewel">welcome{props.username}</h2>

    const LoginPrompt =  <h2 className="wwwen">please log in to continue</h2> 

    return ( props.isLoggedIn ? WelcomeMessage: LoginPrompt  )


/* 
    return ( props.isLoggedIn ? <h2 className="">welcome{props.username}</h2> : <h2>please log in to continue</h2> ) */
}
 

   /* conditional rendering/*
   /* if(props.isLoggedIn){
    return <h2>welcome {props.username}</h2>

 it is not a must to use an else statement cause itbis nnotbexplicit or that complex
if only use return i we will get the same results
cause return also means exit 
else{
    return <h2>please log in to continue</h2>
}  */
   

    /* we can alseays use the tenary option*/
    /*we can use thetenary operator in anotherwaythe operator on the firstline*/

    UserGreeting.prototypes = {
        isLoggedIn : PropTypes.bool,
        username : PropTypes.string
    }

    UserGreeting.defaultProps = {
        isLoggedIn : false,
        username: "guest"
    }


export default UserGreeting




