// Export the CopyButton component
export const CopyButton = (props) => {
  return (
    <div>
      {/* Create a button for copying the password */}
      <button 
        className="outline-none bg-slate-500 text-white px-4 py-1 shrink-0 rounded-r-lg cursor-pointer"
        onClick={props.copyFunction}
        >
        Copy
      </button>
    </div>
  );
};