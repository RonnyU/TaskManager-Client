import React from 'react';

const TaskForm = () => {
  return (
    <div className='formulario'>
      <form>
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Task name...'
            name='name'
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='text'
            className='btn btn-primario btn-submit btn-block'
            value='Add task'
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
