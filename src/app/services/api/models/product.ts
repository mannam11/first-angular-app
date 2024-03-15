import { Rating } from "./rating";

export interface product{
    id?: number,
    title?:string,
    description?:string,
    category?:string,
    image?:string,
    price?:number,
    rate?:Rating
}