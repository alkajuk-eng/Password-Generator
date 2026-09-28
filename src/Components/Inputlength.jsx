// Export the Input component
export const Inputlength = (props) => {
  return (
    <div className="flex items-center gap-x-1">
      {/* Create a range slider for password length */}
      <input
        type="range"
        // Set the minimum password length
        min={6}
        // Set the maximum password length
        max={100}
        // Get the current length from the parent component
        value={props.length}
        className="cursor-pointer"
        // Update the length in the parent component
        onChange={(e) => {props.setLength(Number(e.target.value));}}
        // Connect the input with the label
        id="mylength"
      />

      {/* Display the current password length */}
      <label htmlFor="mylength">Length: {props.length}</label>
    </div>
  )
}
