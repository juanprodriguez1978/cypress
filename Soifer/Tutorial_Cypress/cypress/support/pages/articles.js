class articlesPage{
    /*constructor(){
        this.banner = '.lighter';
    }*/  //Se lo reemplazo con el fixture articles.json

    verifyArticle = (article) => {
        cy.fixture('articles.json').then((locators)=>{
            cy.get(locators.banner).contains(article);
        })
        
    }
}
export default new articlesPage();