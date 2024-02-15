"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
// add useState hook for opening and closing modal
/**
 * The <boolean> in useState<boolean>(false) is a TypeScript generic type annotation that explicitly specifies the type of state being managed by the useState hook in a React component. It tells TypeScript that this piece of state should always be a boolean value (true or false).

Purpose of <boolean>:
Type Safety: It ensures that the state and the setter function provided by useState are strictly typed to boolean values. This means you'll get compile-time errors if you try to set the state to anything other than a boolean, enhancing code reliability and reducing runtime errors.
Code Clarity: It makes the code more readable and self-documenting by clearly stating the expected type of the state variable. This is especially useful in larger components or projects where understanding the data types at a glance can save time.
 */

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'>
        Add new task <FaPlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
