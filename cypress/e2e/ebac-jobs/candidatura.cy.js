/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/');
    })

    it('Deve levar o usuário atpe o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click(); 
        cy.get('input').should('have.length', 7);
        cy.screenshot('tela-inscricao');
    });

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click(); 
        cy.get('input[name="nome-completo"]').type('rodrigo cinelli');
        cy.get('input[name="email"]').type('rodcinelli@gmail.com');
        cy.get('input[name="telefone"]').type('21 983220819');
        cy.get('input[name="endereco"]').type('rua magno martins, bairro ilha do governador, rio de janeiro-rj');
        cy.get('#linux').check();
        cy.get('select[name="escolaridade"]').select('outros');
        cy.get('.Aplicacao_button__tw2AE').click();

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!');
        });

        cy.screenshot('tela-inscricao-preenchido');
    });
});