describe('Cuentas',  ()=>{
    var a = 1+1;
    var b = 2;
    var c = 9;
    var d = 12;
    it('Vamos a ver que se sume bien', ()=>{
        expect(a==b).to.equal(true);    
    })
    it('Vamos a ver que reste bien', ()=>{
        expect(a-5,"La resta debe dar 0, pero da otro valor").to.equal(0);    
    })
    it('Vamos a ver una igualdad', ()=>{
        expect(1==2,"Ambos terminos tiene que ser iguales y no lo son").to.equal(true); //Se coloca una aclaracion para que pueda leerse mejor el error
    })
    it('Vamos a ver que no sea una igualdad', ()=>{
        expect(1==2).to.equal(false);    
    })
    it('Vamos a ver una resta este bien', ()=>{
        expect(1-1).to.equal(0);    
    })
    it('Vamos a ver que una suma este bien', ()=>{
        expect(2+3).to.equal(5);    
    })
    it('Vamos a ver que una resta no este bien', ()=>{
        expect(1-1).to.not.equal(2);
    })
    it('Tiene que ser verdadero', ()=>{
        expect(2==2).to.be.true;
    })
    it('Tiene que ser falso', ()=>{
        expect(2==1).to.be.false;
    })
    it('La variable existe', ()=>{
        expect(a).to.exist;
    })
    it('Es menor a 10', ()=>{
        expect(c).to.be.lessThan(10);
    })
    it('Es mayor a 10', ()=>{
        expect(d).to.be.greaterThan(10);
    })
})