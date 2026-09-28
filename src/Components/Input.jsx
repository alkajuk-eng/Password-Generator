// Export the Input component
export const Input = (props) => {
  return (
    <input
      // Create a text input
      type="text"
      // Get the password from the parent component through props
      value={props.password}
      // Remove the default outline and add padding
      className="outline-none w-full py-1 px-3"
      // Show placeholder text when password is empty
      placeholder="Password"
      // Prevent the user from editing the password manually
      readOnly
       // Connect the input element to the ref received from the parent component
      ref={props.Ref}
    />
  );
};

