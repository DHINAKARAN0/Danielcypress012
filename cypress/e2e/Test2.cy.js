describe('BookMyShow', () => {
  // Modify the user-agent to mimic a real browser
  before(() => {
    cy.on('before:browser:launch', (browser = {}, launchOptions) => {
      launchOptions.args.push('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
      return launchOptions;
    });
  });

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Failed to register a ServiceWorker')) {
        return false; 
      }
      return true;
    });
  });

  it('Clicks on the movie and handles blocked message', () => {
    cy.visit("https://in.bookmyshow.com/explore/home/chennai");
    cy.wait(2000);  
    cy.get('#https\\:\\/\\/in\\.bookmyshow\\.com\\/chennai\\/movies\\/kanguva\\/ET00357490-0 > div > div.sc-133848s-2.sc-1t5vwh0-0.kXnuZd > div > img')
      .should('be.visible')
      .click();
    cy.wait(2000);
    cy.contains('Book tickets').click();
  });
});

  