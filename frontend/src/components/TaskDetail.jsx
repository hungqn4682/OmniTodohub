const TaskDetail = () => {
    return ( 
        <aside className='task-details'>
    <div className='tag-progress'>
      <h2>Task Progress</h2>
      <div className='tag-progress'>
        <p>Copywriting <span>3/8</span></p>
        <progress className="progress progress--copyright" max="8" value="3"> 3 </progress>
      </div>
      <div className='tag-progress'>
        <p>Illustration <span>6/10</span></p>
        <progress className="progress progress--illustration" max="10" value="6"> 6 </progress>
      </div>
      <div className='tag-progress'>
        <p>UI Design <span>2/7</span></p>
        <progress className="progress progress--design" max="7" value="2"> 2 </progress>
      </div>
    </div>
    <div className='task-activity'>
      <h2>Recent Activity</h2>
      <ul>
        <li>
          <span className='task-icon task-icon--attachment'><i className="fas fa-paperclip"></i></span>
          <b>Andrea </b>uploaded 3 documents
          <time datetime="2021-11-24T20:00:00">Aug 10</time>
        </li>
          <li>
              <span className='task-icon task-icon--comment'><i className="fas fa-comment"></i></span>
          <b>Karen </b> left a comment
          <time datetime="2021-11-24T20:00:00">Aug 10</time>
        </li>
         <li>
             <span className='task-icon task-icon--edit'><i className="fas fa-pencil-alt"></i></span>
          <b>Karen </b>uploaded 3 documents
          <time datetime="2021-11-24T20:00:00">Aug 11</time>
        </li>
          <li>
              <span className='task-icon task-icon--attachment'><i className="fas fa-paperclip"></i></span>
          <b>Andrea </b>uploaded 3 documents
          <time datetime="2021-11-24T20:00:00">Aug 11</time>
        </li>
         <li>
             <span className='task-icon task-icon--comment'><i className="fas fa-comment"></i></span>
          <b>Karen </b> left a comment
          <time datetime="2021-11-24T20:00:00">Aug 12</time>
        </li>
      </ul>
    </div>
  </aside>
     );
}
 
export default TaskDetail;