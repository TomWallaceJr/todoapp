import React from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  return (
    <div className='bg-red-500'>
      <button className='btn btn-primary w-full'>
        Add New Task
        <FaPlus className='ml-2' size={18} />
      </button>
    </div>
  );
};

export default AddTask;
