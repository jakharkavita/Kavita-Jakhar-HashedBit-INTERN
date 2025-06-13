const Display = ({ value }) => {
    return <input type="text" className="display" value={value || "0"} disabled />;
  };
  
  export default Display;
  