import React, { Children } from 'react';

export const CartContext = React.createContext;

export const useCartContext =()=>useContext(CartContext);



const CartProvider = ({children, defaultCart}) =>{
    const [cart, setCart] = useState(defaultCart)

    function add(item){
        console.log('Trataste de agregar el item', item.id)

    }
    function remove(itemId){
console.log('Trataste de remover el item', itemId)
    }
    return<CartContext.Provider value={{cart, add, remove}}>
        {Children}
    </CartContext.Provider>
}