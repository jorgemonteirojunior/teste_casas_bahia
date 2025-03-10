import { ELEMENTS } from "../../../support/pages/TesteBugBank/elements";

describe('Funcionalidade de Cadastro', () => {
  beforeEach(() => {
    // Acessa a página home antes de cada teste
    cy.visit("/");
  });

  it('Validar cadastro realizado com sucesso', () => {
        // Acessar a tela de cadastro
    cy.get(ELEMENTS.btnRegistrar).click()
        // Preencher os campos da tela de cadastro
    cy.get(ELEMENTS.email).type('jorge@teste.com', { force: true })
    cy.get(ELEMENTS.nome).type('Jorge Monteiro', { force: true })
    cy.get(ELEMENTS.senha).type('Teste123', { force: true })
    cy.get(ELEMENTS.confirmacaoSenha).type('Teste123', { force: true })
        // Clicar no botão Cadastrar
    cy.get(ELEMENTS.btnCadastrar).click( { force: true })
  })
});  


