describe('ListarViajeConductorPage', () => {
  const validUser = { nombre: 'antonymus', contrasena: 'anonymus' };

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Debería eliminar un viaje al azar', () => {
    // Paso 1: Ingresar credenciales y loguearse
    cy.get('ion-input[placeholder="Ingrese Usuario"]').type(validUser.nombre);
    cy.get('ion-input[placeholder="Ingrese Contraseña"]').type(validUser.contrasena);
    cy.contains('Inicia Sesión').click();

    // Validar navegación a la página del conductor
    cy.url().should('include', '/index-conductor');

    // Paso 2: Ir a la página de lista de viajes del conductor
    cy.contains('Ver Viajes').click();
    cy.url().should('include', '/listar-viaje-conductor');

    // Paso 3: Capturar la lista de viajes y seleccionar uno al azar
    cy.get('ion-item').should('have.length.greaterThan', 0);
    cy.get('ion-item')
      .then(($items) => {
        const randomIndex = Math.floor(Math.random() * $items.length);
        return cy.wrap($items[randomIndex]);
      })
      .within(() => {
        // Clic en el botón "Cancelar"
        cy.get('.danger-button').click();
      });

    // Paso 4: Confirmar la eliminación del viaje en el modal de confirmación
    cy.get('ion-alert').should('be.visible');
    cy.get('ion-alert button').contains('Sí').click();

    cy.get('ion-toast').should('exist').shadow().contains('.toast-message','Se elimino correctamente!');
  });
});
