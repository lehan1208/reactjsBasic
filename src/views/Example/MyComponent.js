import React from 'react';
import { useState } from 'react';
import ChildrenOne from './Children';
import AddComponent from './AddComponent';

// class MyComponent extends React.Component {

//   state = {
//     arrJobs: [{ id: "1", title: 'Developer', salary: '500', }]
//   };

//   addNewJob = (job) => {
//     console.log('Check job from parent');
//     this.setState({
//       arrJobs: [...this.state.arrJobs, job],
//       loading: false,
//     })
//   }

//   render() {
//     /**
//      * JSX return về 1 block
//      */
//     return (
//       <>
//         <AddComponent addNewJob={this.addNewJob} />
//         <ChildrenOne arrJobs={this.state.arrJobs}
//         />
//       </>
//     )
//   }
// }

function MyComponent() {
  const [arrJobs, setArrJobs] = useState([
    { id: 1, title: 'Developer', salary: '500' },
  ]);

  const addNewJob = (job) => {
    console.log('Check job from parent');
    setArrJobs([...arrJobs, job]);
  };

  const deleteJob = (job) => {
    const newJobList = [...arrJobs].filter((item) => item.id !== job.id);
    setArrJobs(newJobList);
    console.log('deleteJob:', newJobList);
  };
  return (
    <>
      <AddComponent addNewJob={addNewJob} />
      <ChildrenOne arrJobs={arrJobs} deleteJob={deleteJob} />
    </>
  );
}

export default MyComponent;
