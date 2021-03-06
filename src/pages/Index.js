import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import Personal from '../components/Stats/Personal';

const Index = () => (
  <Main
    description={"'s'"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <div>
            <h2>
              Deal End in..
            </h2>
            <p><Personal /></p>
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
