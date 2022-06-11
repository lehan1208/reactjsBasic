import React from 'react';
import { useState } from 'react';

function AddComponent({ addNewJob }) {
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');

  const handleChangeTitleJob = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeSalary = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !salary) {
      alert('Missing require params');
      return;
    }

    addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: title,
      salary: salary,
    });
    setTitle('');
    setSalary('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="fname">Title Job:</label>
      <br />
      <input name="fname" type="text" value={title} onChange={(e) => handleChangeTitleJob(e)} />
      <br />
      <label htmlFor="lname">Salary:</label>
      <br />
      <input name="lname" type="text" value={salary} onChange={(e) => handleChangeSalary(e)} />
      <br />

      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddComponent;
