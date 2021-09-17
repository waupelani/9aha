import React from 'react';
import Table from './Table';
import personal from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <Table data={personal.data} />
  </>
);

export default PersonalStats;
