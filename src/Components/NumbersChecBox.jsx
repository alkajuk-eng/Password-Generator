// Export the NumbersChecBox component
export const NumbersChecBox = (props) => {
  return (
    // Create a container for the checkbox and label
    <div className="flex items-center gap-x-1">
      {/* Create a checkbox for enabling numbers */}
      <input
        type="checkbox"
        // Set the initial checkbox state
        defaultChecked={props.numberAllowed}
        // Connect the input with the label
        id="numberInput"
        // Change the cursor to a pointer
        className="cursor-pointer"
        // Toggle the numberAllowed state in the parent component
        onChange={() => {
          props.setNumberAllowed((previous) => !previous);
        }}
      />
      {/* Display the checkbox label */}
      <label htmlFor="numberInput">
        Numbers
      </label>
    </div>
  );
};