var compare = (a, b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

class WorkShop {
    constructor(){
        this.employes = [];
    }

    addEmploye(FName, ageInNum){
        this.employes.push({name: FName, age: ageInNum});
    }

    workOnSunday(){
        let len = this.employes.length;
        let canWork = [];
        for(let i=0;i < len; i++){
            if(this.employes[i].age > 18)
                canWork.push(this.employes[i]);
        }
        return canWork;
    }
    sortByName(){
        this.employes.sort(compare);
        return 1;
    }
}



QUnit.test("Adding Employes",(assert) => {
    const work = new WorkShop();
    work.addEmploye('Max',17);
    assert.ok(work.employes[0].name === 'Max');
    assert.ok(work.employes[0].age === 17);
});


QUnit.test("Checking Function for workers who are +18, so i can get list of Sunday Workers",(assert) => {
    const work = new WorkShop();
    work.addEmploye('Max', 17);
    work.addEmploye('Sepp',18);
    work.addEmploye('Nina', 15);
    work.addEmploye('Mike', 51);

    assert.ok(work.workOnSunday()[0].name === 'Mike');
    assert.ok(work.workOnSunday()[0].age === 51);
});


QUnit.test("Sortng Array By Names, so its easier to find employes",(assert) => {
    const work = new WorkShop();
    work.addEmploye('Sepp',18);
    work.addEmploye('Max', 17);
    work.addEmploye('Nina', 15);
    work.addEmploye('Mike', 51);

    assert.ok(work.sortByName() === 1);
    assert.ok(work.employes[0].name === 'Max');
    assert.ok(work.employes[1].name === 'Mike');
    assert.ok(work.employes[2].name === 'Nina');
    assert.ok(work.employes[3].name === 'Sepp');
})