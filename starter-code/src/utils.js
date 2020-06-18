export const normalizeProductsData = (data) => data.reduce((acc, product) => ({...acc, [product.id]: product}), {});

export const denormalizeProductsData = (data) => Object.values(data);

export const normalizeCartsData = (data) => data.reduce((acc, cart) => ({...acc, [cart.id]: cart}), {});

export const denormalizeCartsData = (data) => Object.values(data);

export const checkIfEmptyOject = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) return false;
    }
    return true;
}