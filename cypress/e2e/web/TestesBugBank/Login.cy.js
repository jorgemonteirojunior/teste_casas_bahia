import { ELEMENTS } from "../../../support/pages/TesteBugBank/elements";

describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Validar login com sucesso', () => {
      //Preencher os dados de Login com dados Válidos
      cy.get(ELEMENTS.emailLogin).first().type('jorge@teste.com', { force: true });
      cy.get(ELEMENTS.senhaLogin).type('Teste123', { force: true });
      //Clicar no botão Acessar
      cy.get(ELEMENTS.btnAcessarLogin).click();
  }); 
  
  it('Validar login com Informações invalidas', () => {
      //Preenher os dados de Login com dados Inválidos
      cy.get(ELEMENTS.emailLogin).first().type('jorge@jorgeerrado.com', { force: true });
      cy.get(ELEMENTS.senhaLogin).type('Teste123', { force: true })
      cy.get('.otUnI').click();
  });
});


