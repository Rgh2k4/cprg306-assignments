import React from 'react';

const Item = ({ name, quantity, category, onSelect}) => {
    const handleClick = () => {
        onSelect(name);
    };
    return (
        <li>
            <div className="container max-w-screen-sm bg-slate-600 border border-gray-950 rounded cursor-pointer" onClick={handleClick}>
                <h2 className="pl-3">{name}</h2>
                <p className="pl-3">Purchase {quantity} from the {category} aisle.</p>
            </div>
        </li>
    )
}

export default Item;