import { getShoppingCart } from "../components/utilities/fakedb"

const cartProductsLoader = async () => {
    const loadedProducts = await fetch("products.json")
    const products = await loadedProducts.json()

    // console.log(products)
    const storeCart = getShoppingCart();

    const savedCart = [];

    for(const id in storeCart) {
        const addedProduct = products.find( product => product.id === id)
        // console.log(addedProduct)
        if(addedProduct) {
            // console.log(addedProduct)
            const quantity = storeCart[id]
            addedProduct.quantity = quantity

           savedCart.push(addedProduct)
        }
    }

    return savedCart

}

export default cartProductsLoader;