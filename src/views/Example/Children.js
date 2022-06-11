import { useState } from 'react';
import './Demo.scss';

function ChildrenOne({ arrJobs, deleteJob }) {
  const [state, setState] = useState(false);

  const handleShowHide = () => {
    setState(!state);
  };

  const handleDelete = (id) => {
    deleteJob(id);
    // console.log('Deleted');
  };

  // const check = state === true ? 'state = true' : 'state = false';
  // console.log(check);

  return (
    <>
      {state === false ? ( // Nếu state = false => hiện Show btn
        <div>
          <button onClick={() => handleShowHide()} className='btn-show'>
            Show
          </button>
        </div>
      ) : (
        // Nếu state = true =>  hiện joblist và Hide btn
        <>
          <div className='job-list'></div>
          {arrJobs.map((item) => {
            // if (item.salary >= 500) {
            return (
              <div key={item.id}>
                {item.title} - {item.salary} $
                <span onClick={() => handleDelete()}>&times;</span>
              </div>
            );
            // }
          })}
          <div>
            <button onClick={() => handleShowHide()}>Hide</button>
          </div>
        </>
      )}
    </>
  );
}

export default ChildrenOne;
