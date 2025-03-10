import { ELEMENTS } from "../../../support/pages/TesteBugBank/elements";
describe('Funcionalidade de Transferência', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Realizar uma Transferência com sucesso', () => {
    cy.get(ELEMENTS.btnRegistrar).click()
    cy.get(ELEMENTS.email).type('jorge12@teste.com', { force: true })
    cy.get(ELEMENTS.nome).type('Jorge Monteiro dois', { force: true })
    cy.get(ELEMENTS.senha).type('Teste123', { force: true })
    cy.get(ELEMENTS.confirmacaoSenha).type('Teste123', { force: true })
    cy.get(ELEMENTS.flagContaComSaldo).click({ force: true })
    cy.get(ELEMENTS.btnCadastrar).click({ force: true })
    cy.get('#btnCloseModal').click()
    cy.get(ELEMENTS.emailLogin).first().type('jorge12@teste.com', { force: true });
    cy.get(ELEMENTS.senhaLogin).type('Teste123', { force: true });
    cy.get(ELEMENTS.btnAcessarLogin).click();
    //Gravar as informações da conta e separar por número de conta e dígito
    let accountNumber;
    let digit;
    cy.get('#textAccountNumber > span').invoke('text').then((text) => {
      const parts = text.split('-');
      accountNumber = parts[0];
      digit = parts[1];
      cy.log(`Número da conta: ${accountNumber}`);
      cy.log(`Dígito: ${digit}`);
      cy.get('#btnExit').click()
      cy.get(ELEMENTS.btnRegistrar).click()
      cy.get(ELEMENTS.email).type('jorge@teste.com', { force: true })
      cy.get(ELEMENTS.nome).type('Jorge Monteiro dois', { force: true })
      cy.get(ELEMENTS.senha).type('Teste123', { force: true })
      cy.get(ELEMENTS.confirmacaoSenha).type('Teste123', { force: true })
      cy.get(ELEMENTS.flagContaComSaldo).click({ force: true })
      cy.get(ELEMENTS.btnCadastrar).click({ force: true })
      cy.get('#btnCloseModal').click()
      cy.get(ELEMENTS.emailLogin).first().type('jorge@teste.com', { force: true });
      cy.get(ELEMENTS.senhaLogin).type('Teste123', { force: true });
      cy.get(ELEMENTS.btnAcessarLogin).click();
      //Realizar a transferência entre as contas usando a conta e o dígito gravados na variável anteriormente
      cy.get('#btn-TRANSFERÊNCIA').click()
      cy.get(':nth-child(1) > .input__default').type(accountNumber)
      cy.get('.account__data > :nth-child(2) > .input__default').type(digit)
      cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('10')
      cy.get(':nth-child(3) > .input__default').type('Teste')
      cy.get('.style__ContainerButton-sc-1wsixal-0').click()
      //validar a mensagem de sucesso na transferência
      cy.get('#modalText').should('contain', 'Transferencia realizada com sucesso');
    });
  });
});
