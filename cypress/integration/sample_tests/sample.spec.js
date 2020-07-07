describe( 'Google Search', () => {
  it( 'should search google for browserstack and confirm results', () => {
    cy.visit( 'https://www.google.com/' )
    cy.get( '[title="Search"]' ).type( 'browserstack {enter}' )
    cy.get( 'h3' ).should( 'contain', 'BrowserStack' )
  })
})