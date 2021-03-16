import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Item from './Item';

const List = ({ filter }) => {
    const [productsList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProductsList();
    }, []);

    const fetchProductsList = async () => {
        try {
            const response = await axios.get('https://603e38c548171b0017b2ecf7.mockapi.io/homes');
            if (response.data) {
                setProductList(response.data);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            setError('Loading error! Try refreshing the page...');
        }
    };

    const renderList = () => (
        <div className='productsWrapper'>
            {productsList.length > 0 ? (
                productsList.map((product, index) => {
                    if (filter) {
                        if (product.title.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
                            return null;
                        }
                    }
                    return <Item key={index} product={product} />;
                })
            ) : (
                <div className='centered error'>{error}</div>
            )}
        </div>
    );

    const renderLoader = () => <div className='centered'>Loading...</div>;

    return loading ? renderLoader() : renderList();
};

export default List;
