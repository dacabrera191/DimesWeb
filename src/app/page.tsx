'use client';
import './globals.css';
import Button from "./components/CustomButton";

function App() {
  return (
    <>
      <h1>Colorful Custom Button Components</h1>
      <Button 
        border="none"
        color="pink"
        height = "200px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "200px"
        children = "I'm a pink circle!"
      />
    </>
  );
}

export default App;

