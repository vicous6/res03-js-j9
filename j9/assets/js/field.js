
class Field {
    #element;
     #errors;
     #name;
    
    constructor(element){
        
        this.#element =element;
         this.#errors =[];
        
       
    }
        get element(){
            
            return this.#element;
        }
         set element(element){
            
           this.#element = element;
        }
        
        
        get errors(){
            
            return this.#errors;
        }
         set errors(errors){
            
           this.#errors = errors;
        }
       
        
        get name(){
            
            return this.#name;
        }
       
       
         set name(name){
            
           this.#name = name;
        }
       
        serialize(){
            
            
        }
      
}


export { Field } ;