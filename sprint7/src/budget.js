class Budget{
    constructor(id=0,name='',client='',items,total=0,pgs=1,lang=1){
        this.id=id;
        this.name=name;
        this.client=client;
        this.items=items;
        this.total=total;
        this.pgs=pgs;
        this.lang=lang;
    }
    


    
}

const CLIENTLIST = [];
let budget1 = new Budget (1,'Project-1','Xilo Fonez', [1,0,1],1000,5,2);
let budget2 = new Budget (2,'XXX','Bebo Foo', [1,1,0],800,1,1);
let budget3 = new Budget (3,'Boniato Inc.','Pep Pi', [0,0,1],200,1,1);
let budget4 = new Budget (4,'Aaron S.A.','Ariel Heinz', [1,1,1],2000,2,2);
CLIENTLIST.push(budget1,budget2,budget3,budget4);





