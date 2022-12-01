class EmployeePayrollData{
    startDate;
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw 'Name is Incorrect !'
    }
    get name(){
        return this._name
    }
    set salary(salary){
        let salaryRegex = RegExp('^[1-9]{1}[0-9]{1,}$');
        if(salaryRegex.test(salary)){
            this._salary = salary;
        }
        else throw 'Salary is Incorrect !'
    }
    get salary(){
        return this._salary
    }
 
    set id(id){
        let idRegex = RegExp('^[1-9]{1}[0-9]?$');
        if(idRegex.test(id)){
            this._id = id;
        }
        else throw 'Id is Incorrect !'
    }
    get id(){
        return this._id
    }
    set gender(gender){
        let genderRegex = RegExp('^([M]|[F]){1}$')
        if(genderRegex.test(gender)){
            this._gender = gender;
        }
        else throw 'Gender is Incorrect !'
    }
    get gender(){
        return this._gender
    }
   
    
    toString(){
        const options = {year:'numeric' ,month:'long',day:'numeric'}
        const empDate = !this.startDate?"undefined" :this.startDate.toLocaleDateString("en-us",options)
    return "id : "+this.id+" ,name : "+this.name+" ,salary : "+this.salary+" ,gender : "+this.gender+" ,startdate : "+empDate
    }
}
try{
let employee = new EmployeePayrollData(1,"Raghav",1245,"F",new Date())
console.log(employee.toString())
}catch(e){
console.error(e)
}

try{
    let employee = new EmployeePayrollData(1,"Jasas",124,"M",new Date())
    employee.salary = 132
    console.log(employee.toString())

}catch(e){
console.error(e)
}
