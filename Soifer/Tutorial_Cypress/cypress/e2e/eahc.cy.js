describe('Search test cases',function(){
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas")
    })
    after(function(){
        cy.log("Ejecutando postcondiciones a las pruebas")
    })
    beforeEach(function(){ //Se ejecuta antes de cada prueba
        cy.visit('http://automationpractice.com/index.php')    
    })
    afterEach(function(){ //Se ejecuta luego de cada prueba
        cy.log('Poniendo datos en su estado inicial')
    })
    
    it('Search dresses', function(){
        cy.get('#search_query_top').type('dress')
        cy.get('#searchbox > .btn').click()
        cy.get('.lighter').contains('"dress"')
    })

    it('Search hats', function(){
        cy.get('#search_query_top').type('hat')
        cy.get('#searchbox > .btn').click()
        cy.get('.lighter').contains('"hat"')
    })
    
})