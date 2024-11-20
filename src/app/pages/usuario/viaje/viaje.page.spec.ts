describe('ViajePage', () => {
  const validUser = { nombre: 'prueba2', contrasena: '1234' };

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Debería seleccionar y confirmar un viaje al azar', () => {
    // Paso 1: Ingresar credenciales y loguearse
    cy.get('ion-input[placeholder="Ingrese Usuario"]').type(validUser.nombre);
    cy.get('ion-input[placeholder="Ingrese Contraseña"]').type(validUser.contrasena);
    cy.contains('Inicia Sesión').click();

    // Validar navegación a la página del pasajero
    cy.url().should('include', '/index');

    // Paso 2: Navegar a la página de lista de viajes
    cy.contains('Iniciar Viaje').click();
    cy.url().should('include', '/viaje');

    // Paso 3: Capturar la lista de viajes y seleccionar uno al azar
    cy.get('ion-item').should('have.length.greaterThan', 0); // Validar que hay viajes disponibles
    cy.get('ion-item')
      .then(($items) => {
        const randomIndex = Math.floor(Math.random() * $items.length); // Índice aleatorio
        return cy.wrap($items[randomIndex]);
      })
      .click(); // Hacer clic en el viaje seleccionado

    // Paso 4: Confirmar el viaje seleccionado
    cy.get('ion-button').contains('Confirmar Viaje').click();
  });
});
