// Write your solution in this file!
const employee = {
    name: "Darrin",
    streetAddress: "3610 Detrick",
}

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newEmployee = {... employee};
    newEmployee[key] = value;

    return newEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey (employee, key)
{
    const empl = {...employee}
    delete empl[key]

    return empl


}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key]
    return employee


}