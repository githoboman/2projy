/* eslint-disable no-unused-vars */
/* import Card from './Card.jsx' */
import Button from "./components/Button.jsx"
import Student from "./components/Student.jsx"

function App() {
  return (
    <>
      <Button />
      <Student name = "Spongebob" age = {30 } Student="true"/>
      <Student name = 'patrick' age = {42}  Student = "no"></Student>
      <Student  name = 'squirdward' age = {50}  Student = "no"></Student>
      <Student name = 'sandy' age = {27 } Student = "true"></Student>
      <Student/>
      <Student/>
      {/* <Card></Card> */}
    </>
  );
}

export default App;
