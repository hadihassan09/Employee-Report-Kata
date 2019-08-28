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
}


QUnit.test("Adding Employes",(assert) => {
    const work = new WorkShop();
    work.addEmploye('Max',17);
    assert.ok(work.employes[0].name === 'Max');
    assert.ok(work.employes[0].age === 17);
});

QUnit.test("Checking Function for workers +18",(assert) => {
    const work = new WorkShop();
    work.addEmploye('Max', 17);
    work.addEmploye('Sepp',18);
    work.addEmploye('Nina', 15);
    work.addEmploye('Mike', 51);

    assert.ok(work.workOnSunday()[0].name === 'Mike');
    assert.ok(work.workOnSunday()[0].age === 51);
});