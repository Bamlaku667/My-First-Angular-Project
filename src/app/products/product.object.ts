export class Product{
    id: any;
    name: string;
    price: any;
    imageUrl: string;
    description: string;

    constructor(){
        this.id = null;
        this.name = '';
        this.price = null;
        this.imageUrl = '';
        this.description = '';

    }

  

}

export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'Nike', price: 8, imageUrl: '../../assets/images/nike.jpg', description: 'some text some text some text some text'},
    { id: 2, name: 'Addidas', price: 12, imageUrl: '../../assets/images/addida.jpg', description: 'my text my text my text my text my text'},
    { id: 3, name: 'Puma', price: 10, imageUrl: '../../assets/images/puma.jpg', description: 'this product this product this product'}
];