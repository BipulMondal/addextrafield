import React from "react";

const AddField = () => {

    const handleAdd = () => {
        
    }

    const handleDelete = () => {

    }


  return (
    <>
      <div className=" w-1/2 flex items-center">
        <div className="bg-gray-200 h-auto w-2/3 p-4 text-left">
          <label htmlFor="">Add Text</label>
          <br />
          <input type="text"
           className="w-full p-2.5 text-lg " 
           
           />
        </div>
        <button className="h-8 w-32 bg-gray-500 ml-4 text-white font-bold" onClick={handleAdd}>
          Add
        </button>
        <button className="h-8 w-32 bg-red-500 ml-4" onClick={handleDelete}>
          delete
        </button>
      </div>
    </>
  );
};

export default AddField;
