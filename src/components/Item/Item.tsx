import React from 'react';
import './Item.scss';

interface IItemProps {
    clicked: () => void;
    itemName: string;
    price: string;
}

const item = (props: IItemProps) => {

    const { clicked, itemName, price } = props;
    
    return (
        <div className="item">
            <h1>{itemName}</h1>
            <p>${price}</p>
            <button className='delete-btn' onClick={clicked}>Delete</button>
        </div>
    );
}

export default item;