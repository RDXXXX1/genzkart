<template>
    <div class="mt-20 md:m-20 md:flex">
        <div class="w-full p-1 md:w-1/2">
            <img :src="product.url" class="object-contain h-160">
        </div>

        <div class=" w-full md:w-1/2 m-2 ">
            <h1 class="font-bold text-sm sm:text-2xl text-black-400 mb-2 ">{{ product.title.shortTitle }}</h1>
            <p class="font  text-sm sm:text-xl text-gray-400 mb-2">{{ product.title.longTitle }}</p>
            <div>
                <p
                    class="text-sm font-semibold uppercase tracking-wide text-pink-600 bg-pink-100 px-3  mb-2 py-1 rounded-full shadow-sm inline-block">
                    Deal of the Day
                </p>
            </div>

            <span class="text-green-800  text-xs sm:text-xl font-bold mb-2"> ₹{{ product.price.cost }}</span>
            <span class="text-sm sm:text-xl text-gray-400 mx-2 mb-2">MRP</span>
            <span class="line-through text-gray-500 text-xs sm:text-xl mb-2">₹ {{ product.price.mrp }}</span>
            <span class="text-sm sm:text-xl mb-4">(<span>{{ product.price.discount }}off </span>)</span>
            <p class="text-sm sm:text-xl text-green-600 font-semibold mb-2">{{ product.discount }}</p>
            <p class=" text-sm sm:text-xl whitespace-normal break-words text-gray-400 mb-2">{{ product.description }}
            </p>
            <button class="bg-pink-500 text-white p-2 rounded-l-lg rounded-r-lg mb-2 hover:bg-pink-400" @click="addToCartHandler">Add To
                Bag</button>
            <button class="bg-pink-500 text-white p-2  ml-4 rounded-l-lg rounded-r-lg mb-2 hover:bg-pink-400" @click="goToBag">Go To
                Bag</button>

            <div>
                <h2 class="text:sm sm:text-xl font-bold mb-4">Best Offers</h2>
                <ul class="space-y-2 m-2">
                    <li class="mb-2">
                        <p class="font-semibold">10% Discount on ICICI Bank Credit & Debit Cards</p>
                        <p class="text-sm text-gray-600">Min Spend ₹3500, Max Discount ₹1000.</p>

                    </li>
                    <li class="mb-2">
                        <p class="font-semibold">10% Discount on Axis Bank Credit Card</p>
                        <p class="text-sm text-gray-600">Min Spend ₹3500, Max Discount ₹1000.</p>

                    </li>
                    <li class="mb-2">
                        <p class="font-semibold">10% Discount on Axis Bank Flipkart Axis Bank Credit Card</p>
                        <p class="text-sm text-gray-600">Min Spend ₹3500, Max Discount ₹1000.</p>

                    </li>
                    <li class="mb-2">
                        <p class="font-semibold">10% Discount on Kotak Bank Credit Cards</p>
                        <p class="text-sm text-gray-600">Min Spend ₹3500, Max Discount ₹1000.</p>
                        <p class="text-sm text-pink-700">Terms & Condition</p>
                    </li>
                </ul>
            </div>

<hr/>
            <div class="mt-6">
                <p class="text-lg font-bold text-gray-800 mb-4">Customer Reviews</p>

                <div v-for="user in product.reviews" :key="user"
                    class="mr-8 mb-3 ">
                    <div class="flex items-center justify-between mb-1">
                        <p class="text-sm font-semibold text-gray-700">{{ user.user }}</p>
                        <p class="text-pink-600 font-bold text-sm">
                            ★ {{ user.rating }} / 5
                        </p>
                    </div>
                    <p class="text-gray-600 text-sm">{{ user.comment }}</p>
                   
                </div>
                 <hr/>
            </div>
        </div>

    </div>
</template>

<script>
import { products } from '../data/products';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProductDescription',
    props: ['slug'],
    data() {
        return {
            product: null
        };
    },
    computed: {
        ...mapGetters('cart', ['cartItems'])
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        goToBag() {
            this.$router.push('/cart')
        },
        addToCartHandler() {

            console.log("Product being added to cart:", this.product); 
            this.addToCart(this.product)
                .then(() => {
                    console.log("Product added to cart successfully");
                })
                .catch(err => {
                    console.error("Error adding to cart:", err);
                });
              alert("prduct added to cart")
            console.log("hi", this.cartItems);
        }
    },
    mounted() {
        console.log("Slug from route:", this.slug);
        this.product = products.find(p => p.slug === this.slug);
        console.log("Matched product:", this.product);

    }
};
</script>