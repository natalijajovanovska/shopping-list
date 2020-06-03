import * as actionTypes from './actions';


interface IReducer {
    items: any[],
    counter: number
}

const initialState: IReducer = {
    items: [],
    counter: 0
};

const reducer = (state = initialState, action: { type: any; payload: { itemName: string; price: any; }; itemId: number; }) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem = {
                id: new Date().valueOf(),
                itemName: action.payload.itemName,
                price: action.payload.price
            }
            return {
                ...state,
                items: state.items.concat(newItem)
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item: { id: number; }) => item.id !== action.itemId)
            }
    }
    return state;
};

export default reducer;