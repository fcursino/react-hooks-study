import React, { useReducer } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: Item[];
  totalAmount: number;
}

type Action =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: { id: number } };

const initialState: CartState = { items: [], totalAmount: 0 };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      const removedItem = state.items.find(item => item.id === action.payload.id);
      const reducedTotalAmount = state.totalAmount - (removedItem?.price || 0);
      return {
        ...state,
        items: filteredItems,
        totalAmount: reducedTotalAmount
      };
    default:
      return state;
  }
}

const Usereducer: React.FC = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item: Item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: { id } });

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartState.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cartState.totalAmount}</p>
      <button onClick={() => addItem({ id: 1, name: 'Product 1', price: 10 })}>
        Add Product 1
      </button>
    </div>
  );
}

export default Usereducer;
