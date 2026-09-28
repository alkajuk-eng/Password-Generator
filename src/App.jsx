import { useCallback, useEffect, useState,useRef } from "react";
import "./App.css";

// Import the Input component
import { Input } from "./Components/Input";
// Import the CopyButton component
import { CopyButton } from "./Components/CopyButton";
// Import the password length component
import { Inputlength } from "./Components/Inputlength";
// Import the numbers checkbox component
import { NumbersChecBox } from "./Components/NumbersChecBox";
// Import the characters checkbox component
import { CharacterCheckBox } from "./Components/CharacterCheckBox";

function App() {
  // Store the password length
  const [length, setLength] = useState(10);
  // Log the password length when it changes
  useEffect(() => {console.log('Length: ', length);}, [length]);
  
  // Store whether numbers are allowed
  const [numberAllowed, setNumberAllowed] = useState(false);
  // Log the numbers setting when it changes
  useEffect(() => {console.log('Numbers: ', numberAllowed);}, [numberAllowed]);

  // Store whether special characters are allowed
  const [characterAllowed, setCharacterAllowed] = useState(false);
  // Log the characters setting when it changes
  useEffect(() => {console.log('Characters: ', characterAllowed);}, [characterAllowed]);

  // Store the generated password
  const [password, setPassword] = useState("");
  // Log the password when it changes
  useEffect(() => {console.log('password: ', password);}, [password]);
  

  const passwordAsRef=useRef(null)

  // Password Generation function
  const passwordGenerator = useCallback(() => {
    // Create an empty password
    let password = "";
    // Create the initial character set
    let strData = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Add numbers if they are allowed
    if (numberAllowed) {strData += "0123456789";}

    // Add special characters if they are allowed
    if (characterAllowed) {strData += "!£$%^&@#~`";}

    // Generate characters until the required length is reached
    for (let index = 0; index < length; index++) {
      // Generate a random index from the character set
      let char = Math.floor(Math.random() * strData.length);
      // Get the character at the random index and add it to the password
      password += strData.charAt(char);
    }

    // Save the generated password in the state
    setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // Generate a new password when the settings change
  useEffect(() => {passwordGenerator();}, [length, numberAllowed, characterAllowed]);

  // Copy the current password to the clipboard
  const copyFunction = useCallback(() => {
    passwordAsRef.current?.select();
    passwordAsRef.current?.setSelectionRange(1,6);
    window.navigator.clipboard.writeText(password);}, [password]);
  
  return (
    <>
      {/* Main password generator container */}
      <div className="w-full max-w-screen-md mx-auto text-center shadow-md px-4 py-4 my-8 bg-gray-800 text-yellow-500 rounded-lg">
        {/* Display the application title */}
        <h1>Password Generator App</h1>
        {/* Password input and copy button container */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          {/* Display the generated password */}
          <Input password={password} Ref={passwordAsRef}/>
          {/* Display the button for copying the password */}
          <CopyButton copyFunction={copyFunction}/>
        </div>
        {/* Password settings container */}
        <div className="flex text-sm gap-x-2">
          {/* Password length control */}
          <Inputlength
            length={length}
            setLength={setLength}
          />
          {/* Numbers option */}
          <NumbersChecBox
            numberAllowed={numberAllowed}
            setNumberAllowed={setNumberAllowed}
          />
          {/* Special characters option */}
          <CharacterCheckBox
            characterAllowed={characterAllowed}
            setCharacterAllowed={setCharacterAllowed}
          />
        </div>
      </div>
    </>
  );
}

export default App;