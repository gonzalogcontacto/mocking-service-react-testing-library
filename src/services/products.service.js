export const productService = {
    getProducts: () => {
        let myPromise = new Promise(function(myResolve) {
              myResolve([{image: '2333', price: '22', title: 'HOLA'}]); // when successful
        });
    
    }
}