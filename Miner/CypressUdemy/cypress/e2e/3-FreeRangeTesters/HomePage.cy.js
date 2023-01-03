/*D:\Programming\Cypress\Miner\CypressUdemy> npx cypress open*/

describe ('Home de www.freerangetesters.com', ()=>{
    beforeEach(()=>{
        cy.visit('www.freerangetesters.com/')
    })
    
    it('should have a title', ()=>{
        cy.title().should('include', 'Free Range Testers')
    })
})