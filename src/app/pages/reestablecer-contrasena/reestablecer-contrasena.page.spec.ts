describe('ReestablecerContrasenaPage', () => {
  const validUser = { nombre: 'Verstappen', contrasena: '1234' };

  beforeEach(() => {
    cy.visit('/reestablecer-contrasena');
  });

  it('Deberia de cambiar contrasena e ir a login', () => {
    cy.get('ion-input[placeholder="Ingrese Usuario"]').type(validUser.nombre);
    cy.get('ion-input[placeholder="Ingrese Nueva Contraseña"]').type(validUser.contrasena);
    cy.contains('Reestablecer Contraseña').click();
    
    cy.get('ion-toast').should('exist').shadow().contains('.toast-message','Contrasena cambiada correctamente!');
    cy.url().should('include', '/login');
  });
});
