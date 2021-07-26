import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
  // State del formulario

  const projectsContext = useContext(projectContext);
  const { form, displayForm, formerror, addProject, displayFormError } =
    projectsContext;

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

    if (name === '') {
      displayFormError();
      return;
    }
    addProject(project);
    //reset form
    setProject({
      name: '',
    });
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
      {formerror ? <p className='mensaje error'>Name is required</p> : null}
    </Fragment>
  );
};

export default NewProject;
