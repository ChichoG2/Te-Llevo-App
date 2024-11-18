describe('LoginPage', () => {
  const validUser = { nombre: 'antonymus', contrasena: 'anonymus' };
  const invalidUser = { nombre: 'wrongUser', contrasena: 'wrongPassword' };

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Deberia de mostrar error por credenciales incorrectas', () => {
    // Ingresar usuario y contraseña incorrectos
    cy.get('ion-input[placeholder="Ingrese Usuario"]').type(invalidUser.nombre);
    cy.get('ion-input[placeholder="Ingrese Contraseña"]').type(invalidUser.contrasena);
    cy.contains('Inicia Sesión').click();
    
    cy.get('ion-toast').should('exist').shadow().contains('.toast-message','Credenciales incorrectas!');
  });

  it('Deberia ir a index-conductor por credenciales validas de conductor', () => {
    // Simular un conductor válido con mock de respuesta
    cy.intercept('GET', '**/Usuarios', (req) => {
      req.reply([{ nombre: validUser.nombre, contrasena: validUser.contrasena, esConductor: true }]);
    });

    // Ingresar usuario y contraseña válidos
    cy.get('ion-input[placeholder="Ingrese Usuario"]').type(validUser.nombre);
    cy.get('ion-input[placeholder="Ingrese Contraseña"]').type(validUser.contrasena);
    cy.contains('Inicia Sesión').click();

    // Validar navegación y mensaje
    cy.url().should('include', '/index-conductor');
    cy.get('ion-toast').should('exist').shadow().contains('.toast-message','Bienvenido Conductor!');
  });
});
