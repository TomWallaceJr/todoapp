import React from "react";

const ToDoList = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr className='hover'>
            <th></th>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className='hover'>
            <th>1</th>
            <td>Cy Ganderton</td>

            <td>Blue</td>
          </tr>

          <tr className='hover'>
            <th>3</th>
            <td>Brice Swyre</td>

            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
