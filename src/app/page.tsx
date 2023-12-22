'use client';
import './globals.css';
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <NavBar
      color="red"
      height = "100px"
      width = "useWindowSize"
    />
    <h1>HelloFriend</h1>
    </>
  );
}

export default App;

