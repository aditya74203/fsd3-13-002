const products = [
    {id:1, name:'marker', qty : 100 , price : 15},
    {id:2, name:'duster', qty : 50 , price : 10},
]

let nextId = 3;

export const getAllProducts = () => {
    return products;
}
export const addProduct = () =>{
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
} 