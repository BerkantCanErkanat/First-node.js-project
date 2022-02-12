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
}