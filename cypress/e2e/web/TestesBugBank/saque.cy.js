import { ELEMENTS } from "../../../support/pages/TesteBugBank/elements";
describe('Funcionalidade de Saque', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('Validar funcionalidade Saque que está em Desenvolvimento', () => {
    cy.get(ELEMENTS.btnRegistrar).click()
    cy.get(ELEMENTS.email).type('jorge12@teste.com', { force: true })
    cy.get(ELEMENTS.nome).type('Jorge Monteiro dois', { force: true })
    cy.get(ELEMENTS.senha).type('Teste123', { force: true })
    cy.get(ELEMENTS.confirmacaoSenha).type('Teste123', { force: true })
    cy.get(ELEMENTS.flagContaComSaldo).click( { force: true })
    cy.get(ELEMENTS.btnCadastrar).click( { force: true })
    cy.get('#btnCloseModal').click()
    cy.get(ELEMENTS.emailLogin).first().type('jorge12@teste.com', { force: true });
    cy.get(ELEMENTS.senhaLogin).type('Teste123', { force: true });
    cy.get(ELEMENTS.btnAcessarLogin).click();
    //Clicar na opção de Saque 
    cy.get('#btn-SAQUE').click()
    //Validar a mensagem que é exibida na modal que a funcionalidade ainda está em desenvolvimento
    cy.get('#modalText').should('contain', 'Funcionalidade em desenvolvimento');    
    });
}) 