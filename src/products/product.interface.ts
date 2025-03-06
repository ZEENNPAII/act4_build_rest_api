export interface Product {
<<<<<<< HEAD
    name:string,
    price:number;
    quantity:number;
    image:string;
}
export interface UnitProduct extends Product {
    id:string
}

export interface Products {
    [key:string] : UnitProduct
=======
    name : string,
    price : string;
    quantity : string;
    image : string;
}

export interface UnitProduct extends Product {
    id : string
}

export interface Products {
    [key : string] : UnitProduct
>>>>>>> e12da1b (new update for today)
}