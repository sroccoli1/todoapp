import { v4 as uuidv4 } from 'uuid';
export class Todo{
    id:string;
    title:string; 
    description:string; 
    completed:boolean;

    constructor(title:string, description:string, completed:boolean = false){
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}