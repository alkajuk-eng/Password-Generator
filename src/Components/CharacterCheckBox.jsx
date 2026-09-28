// Export the CharacterCheckBox component
export const CharacterCheckBox = (props) => {
  return (
    // Create a container for the checkbox and label
    <div className="flex items-center gap-x-1">
      {/* Create a checkbox for enabling special characters */}
      <input
        type="checkbox"
        // Set the initial checkbox state
        defaultChecked={props.characterAllowed}
        // Connect the input with the label
        id="characterInput"
        // Change the cursor to a pointer
        className="cursor-pointer"
        // Toggle the characterAllowed state in the parent component
        onChange={() => {
          props.setCharacterAllowed((previous) => !previous);
        }}
      />
      {/* Display the checkbox label */}
      <label htmlFor="characterInput">
        Characters
      </label>
    </div>
  );
};