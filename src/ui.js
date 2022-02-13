export class Ui {
    addEmployeesToUI(employeesList,employees){
        let result = "";
        employees.forEach((employee)=>{
            result += `<tr>                                 
            <td>${employee.name}</td>
            <td>${employee.departmant}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr> `
        });
        employeesList.innerHTML = result;
    }
    clearInputs(nameInput,deptInput,salInput) {
        nameInput.value = "";
        deptInput.value = "";
        salInput.value = "";
    }
    addNewEmployeeToUI(employeesList,employee){
        let result = `<tr>                                 
        <td>${employee.name}</td>
        <td>${employee.departmant}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr> `
    employeesList.innerHTML += result;
    }
    deleteEmployeeFromUI(employeesList,child){
        employeesList.removeChild(child);
    }
    activateUpdateButton(updateEmployeeButton){
        updateEmployeeButton.style.display = "block";
    }
    deActivateUpdateButton(updateEmployeeButton){
        updateEmployeeButton.style.display = "none";
    }
}