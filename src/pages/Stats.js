import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Site />
    </article>
  </Main>
);

export default Stats;
