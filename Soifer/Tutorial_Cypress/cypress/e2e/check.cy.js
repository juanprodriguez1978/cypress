describe("Pruebas checkbox", ()=>{
    beforeEach(()=>{
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
    })
    it("Large Tops search",()=>{
        cy.get('#layered_category_4').check()
        cy.get('#layered_id_attribute_group_3').check()
        cy.wait(3000)
        cy.get('#layered_id_attribute_group_3').uncheck()
    })
})