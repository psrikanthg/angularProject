export class Employee { 
  
  public name: string = ''; 
  public age: number =0; 
  

    static newEmployee(): Employee {
        return new Employee();
      }
}