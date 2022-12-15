
function load()
{
    fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
    .then(res=>res.json())
    .then(json=>show(json.Employees))
}
function show(employee){
    let table=document.getElementById('tab');
    for(let i=0;i<employee.length;i++){
        let obj=employee[i];
        console.log(obj.Salary);
        let row=document.createElement('tr')
        let name=document.createElement('td')
        let address=document.createElement('td')
        let salary=document.createElement('td')
        let date=document.createElement('td')
        if(obj.Salary>=500000){
            name.innerHTML=obj.Name
            address.innerHTML=obj.Address
            salary.innerHTML=obj.Salary
            date.innerHTML=obj.DateOfJoining
            row.appendChild(name)
            row.appendChild(address)
            row.appendChild(salary)
            row.appendChild(date)
            table.appendChild(row)
        }
    }
}
window.onload=load   
//         Address
// : 
// "Hyderabad"
// DateOfJoining
// : 
// "23-1-2012"
// Name
// : 
// "Scott"
// Salary
// : 
// 500000

