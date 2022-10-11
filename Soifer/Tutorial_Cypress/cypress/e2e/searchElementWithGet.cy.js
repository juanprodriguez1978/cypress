describe('Formas de encontrar un elemento',function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.search_query.form-control.ac_input').type('Hola') //Buscamos por clase
        cy.get('#search_query_top').type(' Como te va? ') //Buscamos por id
        cy.get('[name="search_query"]').type(' Bien, y vos?? ') //Buscamos por cualquier otra propiedad
        cy.get('[placeholder="Search"]').clear() //Buscamos por cualquier otra propiedad. clear borra lo que estaba en el elemento
    })
    
})