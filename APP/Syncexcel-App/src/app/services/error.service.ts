import { EventEmitter } from '@angular/core';
import { Error } from '../models/error.model';


export class ErrorService{
    errorOccurred = new EventEmitter<Error>();
    
    handleError(error:any){
        const errorData = new Error(error.title, error.message);
        this.errorOccurred.emit(errorData);
    }
}