const compare = (a, b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

const getOverEighteen = (array) => {
    let canWork = [];
    for(let i=0;i < array.length; i++){
        if(array[i].age >= 18)
            canWork.push(array[i]);
    }
    return canWork;
}

const compareInv = (a, b) => -1 * compare(a, b);

class WorkShop {
    constructor(){
        this.employees = [];
    }

    addEmployee(FName, ageInNum){
        this.employees.push({name: FName, age: ageInNum});
    }

    workOnSunday(){
        return getOverEighteen(this.employees);
    }

    sortByName(){
        this.employees.sort(compare);
        return 1;
    }

    capitalizeNames(){
        this.employees.forEach((element)=> {
            element.name = element.name.toUpperCase();
        })
        return 1;
    }
    
    sortByNameDes(){
        this.employees.sort(compareInv);
        return 1;
    }

    getFinalList(){
        let finalList = getOverEighteen(this.employees);
        finalList.sort(compare);
        finalList.forEach((element)=> {
            element.name = element.name.toUpperCase();
        });
        finalList.sort(compareInv);
        return finalList;
    }
}

QUnit.test("Checking Function for workers who are +18, so i can get list of Sunday Workers",(assert) => {
    const work = new WorkShop();
    work.addEmployee('Max', 17);
    work.addEmployee('Sepp',18);
    work.addEmployee('Nina', 15);
    work.addEmployee('Mike', 51);

    assert.ok(work.workOnSunday()[0].name === 'Mike');
    assert.ok(work.workOnSunday()[0].age === 51);
});

QUnit.test("Sortng Array By Names, so its easier to find employees",(assert) => {
    const work = new WorkShop();
    work.addEmployee('Sepp',18);
    work.addEmployee('Max', 17);
    work.addEmployee('Nina', 15);
    work.addEmployee('Mike', 51);

    assert.ok(work.sortByName() === 1);
    assert.ok(work.employees[0].name === 'Max');
    assert.ok(work.employees[1].name === 'Mike');
    assert.ok(work.employees[2].name === 'Nina');
    assert.ok(work.employees[3].name === 'Sepp');
});

QUnit.test("Making all names capitalized so I can read it better",(assert) => {
    const work = new WorkShop();
    work.addEmployee('Sepp',18);
    work.addEmployee('Max', 17);
    work.addEmployee('Nina', 15);
    work.addEmployee('Mike', 51);

    assert.ok(work.capitalizeNames() === 1);
    assert.ok(work.employees[0].name === 'SEPP');
    assert.ok(work.employees[1].name === 'MAX');
    assert.ok(work.employees[2].name === 'NINA');
    assert.ok(work.employees[3].name === 'MIKE');
});

QUnit.test("Sortng Array By Names, so its easier to find employees",(assert) => {
    const work = new WorkShop();
    work.addEmployee('Sepp',18);
    work.addEmployee('Max', 17);
    work.addEmployee('Nina', 15);
    work.addEmployee('Mike', 51);

    assert.ok(work.sortByNameDes() === 1);
    assert.ok(work.employees[0].name === 'Sepp');
    assert.ok(work.employees[1].name === 'Nina');
    assert.ok(work.employees[2].name === 'Mike');
    assert.ok(work.employees[3].name === 'Max');
});

QUnit.test("Final List of Employes who can work on sunday with all above rules",(assert) => {
    const work = new WorkShop();
    work.addEmployee('Sepp',18);
    work.addEmployee('Max', 17);
    work.addEmployee('Nina', 19);
    work.addEmployee('Mike', 51);

    assert.ok(work.getFinalList()[0].name === 'NINA');
    assert.ok(work.getFinalList()[1].name === 'MIKE');
})