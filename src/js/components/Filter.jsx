import React from 'react';

const Filter = ({ filter, setFilter }) => (
    <div className='filterWrapper'>
        <label htmlFor='filter'>Filter</label>
        <input id='filter' type='text' value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
);

export default Filter;
