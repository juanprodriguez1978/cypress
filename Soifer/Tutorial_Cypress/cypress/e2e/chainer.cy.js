describe('Escribir en busqueda varios stringd',function(){
    it('Vamos a escribir y limpiar', function(){
        cy.visit('http://automationpractice.com/index.php')
        /*cy.get('.search_query.form-control.ac_input').clear()
        cy.get('.search_query.form-control.ac_input').type('Hola')
        cy.get('.search_query.form-control.ac_input').clear()
        cy.get('.search_query.form-control.ac_input').type('Que tal?')*/

        cy.get('.search_query.form-control.ac_input').clear().type('Hola').clear().type('Que tal?')

    })
    
})