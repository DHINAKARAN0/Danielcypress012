describe('myfisrttest', () => {
    it('Myfisrt', () =>{
        cy.visit("https://rahulshettyacademy.com");
        cy.contains('Course').click();
        cy.contains('Practice').click();
        cy.contains('Practice').click();
        cy.get('input[name="name"]').type('Daniel');
        cy.get('input[name="email"]').type('babyclouds017@gmail.com');
        cy.get('#form-submit').click();
        cy.contains('Automation Practise - 2').click();
        
    });
    
}

);