import {v4 as uuid} from 'uuid';

export class Todo{

    /**
     * 
     * @param {String} description Se recibe la descripción del producto
     */
    constructor(description){
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }

}