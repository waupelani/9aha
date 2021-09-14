import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Index = () => (
  <Main
    description={"'s'"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <div>
            <h2>
              we are opening soon!
            </h2>
            <div className="countdown">
              <div className="container-day">
                <h3 className="day">Time</h3>
                <h3>Day</h3>
              </div>
              <div className="container-hour">
                <h3 className="hour">Time</h3>
                <h3>Hour</h3>
              </div>
              <div className="container-minute">
                <h3 className="minute">Time</h3>
                <h3>Minute</h3>
              </div>
              <div className="container-second">
                <h3 className="second">Time</h3>
                <h3>Second</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Index;
