class WorkShop {
    constructor(){
        this.employes = [];
    }
    addEmploye(employeInfo){
        this.employes.push(employeInfo);
    }

}


QUnit.test("Adding Employes",(assert) => {
    const work = new WorkShop();
    work.addEmploye({name: 'Max', age: 17 });
    assert.ok(work.employes[0].name === 'Max');
    assert.ok(work.employes[0].age === 17);
});