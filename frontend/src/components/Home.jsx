import React from "react";
import TaskDetail from "./TaskDetail";

export default function Home() {
  return (
    <>
      <main className='project'>
        <div className='project-info'>
          <h1>Homepage Design</h1>
          <div className='project-participants'>
            <span></span>
            <span></span>
            <span></span>
            <button className='project-participants__add'>Add Participant</button>
          </div>
        </div>
        <div className='project-tasks'>
          <div className='project-column'>
            <div className='project-column-heading'>
              <h2 className='project-column-heading__title'>Task Ready</h2>
              <button className='project-column-heading__options'>
                <i className='fas fa-ellipsis-h'></i>
              </button>
            </div>
            <div className='task' draggable='true'>
              <div className='task__tags'>
                <span className='task__tag task__tag--copyright'>Copywriting</span>
                <button className='task__options'>
                  <i className='fas fa-ellipsis-h'></i>
                </button>
              </div>
              <p>Konsep hero title yang menarik</p>
              <div className='task__stats'>
                <span>
                  <time datetime='2021-11-24T20:00:00'>
                    <i className='fas fa-flag'></i>Nov 24
                  </time>
                </span>
                <span>
                  <i className='fas fa-comment'></i>3
                </span>
                <span>
                  <i className='fas fa-paperclip'></i>7
                </span>
                <span className='task__owner'></span>
              </div>
            </div>

            <div className='task' draggable='true'>
              <div className='task__tags'>
                <span className='task__tag task__tag--design'>UI Design</span>
                <button className='task__options'>
                  <i className='fas fa-ellipsis-h'></i>
                </button>
              </div>
              <p>Icon di section our services</p>
              <div className='task__stats'>
                <span>
                  <time datetime='2021-11-24T20:00:00'>
                    <i className='fas fa-flag'></i>Nov 24
                  </time>
                </span>
                <span>
                  <i className='fas fa-comment'></i>2
                </span>
                <span>
                  <i className='fas fa-paperclip'></i>5
                </span>
                <span className='task__owner'></span>
              </div>
            </div>

            <div className='task' draggable='true'>
              <div className='task__tags'>
                <span className='task__tag task__tag--copyright'>Copywriting</span>
                <button className='task__options'>
                  <i className='fas fa-ellipsis-h'></i>
                </button>
              </div>
              <p>Konsep hero title yang menarik</p>
              <div className='task__stats'>
                <span>
                  <time datetime='2021-11-24T20:00:00'>
                    <i className='fas fa-flag'></i>Nov 24
                  </time>
                </span>
                <span>
                  <i className='fas fa-comment'></i>2
                </span>
                <span>
                  <i className='fas fa-paperclip'></i>3
                </span>
                <span className='task__owner'></span>
              </div>
            </div>
          </div>

        </div>
      </main>
      <TaskDetail />
    </>
  );
}
