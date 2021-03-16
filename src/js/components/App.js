import React, { useState } from 'react';
import Filter from './Filter';
import Footer from './Footer';
import List from './List';

const App = () => {
    const [filter, setFilter] = useState('');

    return (
        <div className="container">
            <Filter filter={filter} setFilter={setFilter} />
            <List filter={filter} />
            <Footer />
        </div>
    );
}

export default App;
