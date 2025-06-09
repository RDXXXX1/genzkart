
   const state={
        cartItems:[]
    };

   const mutations={
        ADD_TO_CART(state,product){
            const item=state.cartItems.find(p=>p.id===product.id);
            if(item){
                item.quantity+=1;
        
            }else{
                state.cartItems.push({...product,quantity:1});
            }
        },
        REMOVE_FROM_CART(state,productId){
            const product=state.cartItems.find(p=>p.id==productId)
            if(product && product.quantity>1){
                product.quantity--;
            }
            else
            state.cartItems=state.cartItems.filter(p=>p.id!==productId);
        },
        CLEAR_CART(state){
            state.cartItems=[];
        },
    };

    const actions={
        addToCart({commit},product){
            commit('ADD_TO_CART',product);
        },
        removeFromCart({commit},productId){
            commit('REMOVE_FROM_CART',productId);
        },
        clearCart({commit}){
            commit('CLEAR_CART');
        }

    };

    const getters={
        cartItems:state=>state.cartItems
    };

    export default{
        namespaced:true,
        state,
        mutations,
        actions,
        getters
    };
