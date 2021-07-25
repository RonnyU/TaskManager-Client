import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
  // State del formulario

  const projectsContext = useContext(projectContext);
  const { form, displayForm } = projectsContext;

  const [project, setProject] = useState({
    name: '',
  });

  const { name } = project;

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un project
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={() => displayForm()}
      >
        Create new project
      </button>

      {form ? (
        <form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
          <input
            type='text'
            className='input-text'
            placeholder='Project name'
            name='name'
            value={name}
            onChange={handleChange}
          />

          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Add project'
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
