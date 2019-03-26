context('UI Automation Testing', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })


	it("Check Title of Selected Item", () => {
		cy.get(".ninja-professional-blender")
		.should("have.text", "Ninja\u2122 Professional Blender with Single Serve Blending Cups");
	});
  
	it("Check text + in incrementer-button", () => {
		cy.get('.incrementer-button')
		.should("have.text", "+");
	})
	
	it("Check text - in decrement-button", () => {
		cy.get('.decrementer-button')
		.should("have.text", "-");
	})
	  
	it("Check if increment button increases the quantity of cart", () => {
		cy.get('#quantity').then(($span) => {
	  // capture what num is right now
	  const num1 = parseFloat($span.text())
	  
	  cy.get('.incrementer-button').click().then(() => {
		// now capture it again
		const num2 = parseFloat($span.text())

		// make sure it's what we expected
		expect(num2).to.eq(num1 + 1)
	  })
	})
  });
  
	it("Check if decrement button decreases the quantity of cart", () => {
		
		cy.get('.incrementer-button').click().then(() => {
		  cy.get('#quantity').then(($span) => {
		  // capture what num is right now
		  const num1 = parseFloat($span.text())
		  cy.get('.decrementer-button').click().then(() => {
			// now capture it again
			const num2 = parseFloat($span.text())

			// make sure it's what we expected
			expect(num2).to.eq(num1 - 1)
		  })
		})})
  });
  
   it("Check if the decrement-button does not allow quantity to go below 1", () => {
		cy.get('#quantity').then(($span) => {
	  // capture what num is right now
	  const num1 = parseFloat($span.text())

	  cy.get('.decrementer-button').click().then(() => {
		// now capture it again
		const num2 = parseFloat($span.text())

		// make sure it's what we expected
		if(num1 > 1)
		{
			expect(num2).to.eq(num1 - 1)
		}
		else
		{
			expect(num2).to.eq(1)
		}
	  })
	})
  });
  
	it("Check for label Add to registry", () => {
		cy.get("#atr")
		.should("have.text", "Add to registry");
	});
	
	it("Check for label Add to list", () => {
		cy.get("#atl")
		.should("have.text", "Add to list");
	});
	
	it("Check for label Share", () => {
		cy.get("#shr")
		.should("have.text", "Share");
	});
	
	it("Check for price of product", () => {
		cy.get(".formatted-price")
		.should("have.text", "$139.99");
	});
	
	it("Check for label find in a store", () => {
		cy.get("#findInAStore")
		.should("have.text", "find in a store");
	});
	
	it("Check for product highlights", () => {
		cy.get(".product-highlights-title")
		.should("have.text", "product highlights");
	});
  
	});
  