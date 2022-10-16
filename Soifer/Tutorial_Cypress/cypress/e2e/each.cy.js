describe('Search test cases',()=>{
    before(()=>{
        cy.log("Ejecutando precondiciones a las pruebas")
    })
    after(()=>{
        cy.log("Ejecutando postcondiciones a las pruebas")
    })
    beforeEach(()=>{ //Se ejecuta antes de cada prueba
        cy.visit('http://automationpractice.com/index.php')    
    })
    afterEach(()=>{ //Se ejecuta luego de cada prueba
        cy.log('Poniendo datos en su estado inicial')
    })
    
    it('Search dresses', ()=>{
        cy.get('#search_query_top').type('dress')
        cy.get('#searchbox > .btn').click()
        cy.get('.lighter').contains('"dress"')
    })

    it('Search hats', ()=>{
        cy.get('#search_query_top').type('hat')
        cy.get('#searchbox > .btn').click()
        cy.get('.lighter').contains('"hat"')
    })
    
})