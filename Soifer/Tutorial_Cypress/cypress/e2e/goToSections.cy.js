describe("Go to different sections", ()=>{
    beforeEach(()=>{
        cy.visit("http://automationpractice.com/index.php")
    })

    it("Go to Women section",()=>{
        cy.get('[class=sf-with-ul]').first().click()// first solo sirve para seleccionar el primer elemento. No existe second, etc
    })
    it("Go to Dresses section",()=>{
        cy.get('[class=sf-with-ul]').eq(3).click() // eq busca por el indice
    })
})