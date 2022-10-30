import indexPage from '../support/pages'
import articlesPage from '../support/pages/articles'

describe('Search test cases',()=>{
    before(()=>{
        cy.log("Ejecutando precondiciones a las pruebas")
    })
    after(()=>{
        cy.log("Ejecutando todas postcondiciones a las pruebas")
    })
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
    })
    afterEach(()=>{
        cy.log("Poniendo datos en su estado original")
    })
    it('Search dresses', ()=>{
        indexPage.search('dress')
        //cy.get('#search_query_top').type('dress')
        //cy.get('#searchbox > .btn').click()
        //cy.get('.lighter').contains('"dress"')
        articlesPage.verifyArticle('dress')
    })
    it('Search hats', ()=>{
        indexPage.search('hat')
        //cy.get('#search_query_top').type('hat')
        //cy.get('#searchbox > .btn').click()
        //cy.get('.lighter').contains('"hat"')
        articlesPage.verifyArticle('"hat"')
    })
})