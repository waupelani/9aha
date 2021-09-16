import React from 'react';
import Table from './Table';
import timedata from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>Some stats about me</h3>
    <Table data={timedata} />
  </>
);

export default PersonalStats;
