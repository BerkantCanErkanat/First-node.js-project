//Request sınıfını import ediyoruz
import { Request } from "./requests";



//ELEMENTLER
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const deptInput = document.getElementById("department");
const salInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

//Request objesi
const request = new Request("http://localhost:3000/employees");
//GET
// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.error(err));
// //POST
// request.post({name:"Seren Erkanat",departmant:'HR',salary:10000})
// .then(addedEmployee => console.log(addedEmployee)) //resolvu burda yakaladık
// .catch(err => console.error(err));
//PUT id yi url de verdik onun ıcın update yapmadık id si 1 olan postun değerlerini değiştik
// request.put(2,{name:"deneme",departmant:'deneme',salary:30000})
// .then(changedEmployee => console.log(changedEmployee)) //resolvu burda yakaladık
// .catch(err => console.error(err));
//DELETE
request.delete(1)
.then(message => console.log(message))
.catch(error => console.error(error));