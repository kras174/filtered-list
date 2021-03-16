import React from 'react';
import house1 from '../../img/house1.png';
import house2 from '../../img/house2.png';
import house3 from '../../img/house3.png';

const Item = (props) => {
    const { product, history } = props;
    const { address, id, price, title, type } = product;

    const priceModifier = (price) => {
        const firstPart = price.toString().slice(0, 3);
        const secondPart = price.toString().slice(3);
        return `£${firstPart},${secondPart}`;
    };

    const imageRandomizer = () => {
        if (id % 3 === 0) return 3;
        if (id % 3 === 2) return 2;
        return 1;
    };

    return (
        <a href={`/details/${id}`}>
            <div className='product'>
                <div className='product-image'>
                    <img
                        src={`./img/house${imageRandomizer()}.png`}
                        alt={`house${imageRandomizer()}`}
                    />
                    <div className='product-type' data-color={type}>
                        {type === 'IndependentLiving' ? 'Independent living' : 'Support Available'}
                    </div>
                </div>
                <div className='product-info'>
                    <div className='product-info-title'>{title}</div>
                    <div className='product-info-adress'>{address}</div>
                    <div className='product-info-price'>
                        New Properties for Sale from{' '}
                        <span className='price'>{priceModifier(price)}</span>
                    </div>
                    <div className='product-info-description'>Shared Ownership Available</div>
                </div>
            </div>
        </a>
    );
};

export default Item;
