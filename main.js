const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                {width:10, height:20},
                {width:15, height:25},
                {width:20, height:30}
            ]
        }
    }
})
