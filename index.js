const departmentList = [
    {
        departmentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]


// ATIVIDADE 1
function howManyDepartments() {
    return departmentList.length
}

// ATIVIDADE 2
function changeDepartmentName(lista, nameDep, newName) {

    for (i = 0; i < lista.length; i++) {

        if (lista[i].departmentName === nameDep) {
            lista[i].departmentName = newName;
            return departmentList
        }
    }
    return "Department not found."
}

// ATIVIDADE 3
function giveTheDepartmentABreak(lista) {
    for (i = 0; i < lista.length; i++) {
        if (lista[i].working === true) {
            lista[i].working = false;
        } else {
            lista[i].working = true;
        }
    }
    return lista;
}

// ATIVIDADE 4
function howManyEmployeesInDepartment(lista, nomeDoDep) {
    for (i = 0; i < lista.length; i++) {

        if (lista[i].departmentName == nomeDoDep) {
            return lista[i].employees.length
        }
    }
    return "Department not found.";
}

// ATIVIDADE 5
function insertNewEmployeeInDepartment(lista, nomeDoDep, pessoa) {
    for(i = 0; i < lista.length; i++) {

        if(lista[i].departmentName === nomeDoDep) {
        lista[i].employees.push(pessoa)
        return lista[i]
        }
    }
    return "Department not found"
}
let pesson = {
    name: "Davi",
    age: 22,
    responsibility: "Responsável Técnico",
    salary: 3600
}

