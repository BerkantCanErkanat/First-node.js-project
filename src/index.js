//Request sınıfını import ediyoruz
import { Request } from "./requests";
import { Ui } from "./ui";


//ELEMENTLER
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const deptInput = document.getElementById("department");
const salInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

//Request objesi
const request = new Request("http://localhost:3000/employees");

//Ui objesi
const ui = new Ui();

//event listeners
addEventListeners();

//update etmek ıcın genel bir id tanımlıyorum
let idToBeUpdated = 0;

function addEventListeners() {
    document.addEventListener("DOMContentLoaded",showAllEmployees);
    form.addEventListener("submit",addNewEmployee);
    employeesList.addEventListener("click",updateOrdeleteEmployee);
    updateEmployeeButton.addEventListener("click",updateTheEmployee);
}
function updateTheEmployee(){
    let name = nameInput.value.trim();
    let dept = deptInput.value.trim();
    let sal = salInput.value.trim();
    if(!checkForRightInput(name,dept,sal)){
        alert("Lutfen tum alanları doldurun");
     }else {
        ui.clearInputs(nameInput,deptInput,salInput);
        ui.deActivateUpdateButton(updateEmployeeButton);
        request.put(idToBeUpdated,{name:name,departmant:dept,salary:Number(sal)})
        .then(changedEmployee => showAllEmployees()) //resolvu burda yakaladık
        .catch(err => console.error(err));
     }
}
function updateOrdeleteEmployee(e){
    if(e.target.id === "delete-employee"){
        let child = e.target.parentNode.parentNode;
        let id = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;
        if(confirm(`id ${id} çalışanı silmek istediğinize emin misiniz`)){
            request.delete(id)
            .then(message => ui.deleteEmployeeFromUI(employeesList,child))
            .catch(error => console.error(error));
        }
    }else if(e.target.id === "update-employee"){
        //güncelleye basılmıs ıse guncelle butonu aktıf olup input alanları bılgıler ıle dolucak
        idToBeUpdated = e.target.parentNode.previousElementSibling.textContent;
        nameInput.value = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        deptInput.value = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        salInput.value = e.target.parentNode.previousElementSibling.previousElementSibling.textContent;
        
        ui.activateUpdateButton(updateEmployeeButton);
    }

}
function showAllEmployees(){ // api den getirir show eder
    request.get()
    .then(employees => ui.addEmployeesToUI(employeesList,employees))
    .catch(err => console.error(err));
}
function addNewEmployee(e){
    //inputları al bosluk kontrol et rest api yaz ui da guncelle
    let name = nameInput.value.trim();
    let dept = deptInput.value.trim();
    let sal = salInput.value.trim();
    if(!checkForRightInput(name,dept,sal)){
       alert("Lutfen tum alanları doldurun");
    }else {
        addEmployeeToRestApi(name,dept,Number(sal));
    }
    ui.clearInputs(nameInput,deptInput,salInput);
    e.preventDefault();
}
function addEmployeeToRestApi(name,dept,sal){ // hem rest api yukler hem de show eder
request.post({name:name,departmant:dept,salary:sal})
.then(addedEmployee => ui.addNewEmployeeToUI(employeesList,addedEmployee))
.catch(err => console.error(err));
}
function checkForRightInput(name,dept,sal){
    if(name === "" || dept === "" || sal === ""){
        return false;
    }else{
        return true;
    }
}

//PUT id yi url de verdik onun ıcın update yapmadık id si 1 olan postun değerlerini değiştik
// request.put(2,{name:"deneme",departmant:'deneme',salary:30000})
// .then(changedEmployee => console.log(changedEmployee)) //resolvu burda yakaladık
// .catch(err => console.error(err));
