import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item/Item';
import AddItem from '../components/AddItem/AddItem';
import * as actionTypes from '../store/actions';

interface IItemsProps {
    onAddedItem: (itemName: string, price: string) => void;
    items: { id: number; itemName: string; price: string; }[];
    onRemovedItem: (id: number) => void;
}

interface IItemsState {
    items: { id: number; itemName: string; price: string; }[];
}

const Items = (props: IItemsProps) => {

    const { onAddedItem, items, onRemovedItem } = props;

    return (
        <div>
            <AddItem itemAdded={onAddedItem} />
            {items.map(item => (
                <Item
                    key={item.id}
                    itemName={item.itemName}
                    price={item.price}
                    clicked={() => onRemovedItem(item.id)} />
            ))}
        </div>
    );
}

const mapStateToProps = (state: IItemsState) => {
    return {
        items: state.items
    };
};

const actionCreatorAddedItem = (itemName: string, price: string) => {
    return {
        type: actionTypes.ADD_ITEM,
        payload: { itemName, price }
    }
}


const mapDispatchToProps = (dispatch: (arg0: { type: string; payload?: { itemName: string; price: string; }; itemId?: number; counter?: number }) => {}) => {
    return {
        onAddedItem: (itemName: string, price: string) => dispatch(actionCreatorAddedItem(itemName, price)),
        onRemovedItem: (id: number) => dispatch({ type: actionTypes.REMOVE_ITEM, itemId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);