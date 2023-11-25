let movies;

describe('Movie Details and Reviews', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/movies/homePage');
    });
  
    it('should navigate to reviews and view full review', () => {
      // Clicks the Second "More Info ..." button (1st movie that showed up for me had no reviews at all to test for)
      cy.get('button:contains("More Info ...")').eq(1).click();
  
      // Clicks the "Reviews" button
      cy.contains('Reviews').click();
  
      // Checks if reviews exist for the movie
      cy.get('table[aria-label="reviews table"]').should('exist');
  
      // Clicks the "Full Review" button
      cy.contains('Full Review').click();
  
      // Checks if the review author and content are visible
      cy.get('h3:contains("Review By:")').should('exist');
      cy.get('p').should('exist'); // Checks if the field for reviews exists
    });
  });

  describe("The favourites feature", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          movies = response.results;
        });
    });
    beforeEach(() => {
      cy.visit("/movies/homePage");
    });
  
    describe("Selecting favourites", () => {
      it("selected movie card shows the red heart", () => {
        cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
        cy.get("button[aria-label='add to favorites']").eq(1).click();
        cy.get(".MuiCardHeader-root").eq(1).find("svg");
      });
    });
  
    describe("The favourites page & testing writing reviews", () => {
      beforeEach(() => {
        // Select two favourites and navigate to Favourites page
        cy.get("button[aria-label='add to favorites']").eq(1).click();
        cy.get("button[aria-label='add to favorites']").eq(3).click();
        cy.get("button").contains("Favorites").click();
      });
      it("only the tagged movies are listed", () => {
        cy.get(".MuiCardHeader-content").should("have.length", 2);
        cy.get(".MuiCardHeader-content")
          .eq(0)
          .find("p")
          .contains(movies[1].title);
        cy.get(".MuiCardHeader-content")
          .eq(1)
          .find("p")
          .contains(movies[3].title);
      });
      it("removes deleted movies", () => {});

      //Writing a Review
      it("Elements within the review form page exist", () => {
        cy.get("svg[data-testid='RateReviewIcon']").eq(0).click();
    //Checks if the "Write a review" title exists
        cy.get('h2:contains("Write a review")').should("exist");

    // Checks if the "Author's name" input field exists
        cy.get('input[name="author"]').should('exist');

    // Checks if the "Review text" input field exists
        cy.get('textarea[name="review"]').should('exist');

    // Checks if the "Rating Select" menu exists
        cy.get('#select-rating').should('exist');

    // Checks if the "Submit" button exists
        cy.get('button[type="submit"]').should('exist');

    // Checks if the "Reset" button exists
        cy.get('button[type="reset"]').should('exist');
      });

      it("should fill out the review form and press the submit button", () => {
        const ratingSelected = "Excellent"

        //Fills in the form
        cy.get("svg[data-testid='RateReviewIcon']").eq(0).click();

        cy.get('input[name="author"]').type('John Doe');
        cy.get('textarea[name="review"]').type('Testing writing into a review form using Cypress.');
        cy.get('#select-rating').click();
        cy.get('li').contains(ratingSelected).click();

        cy.get('button[type="submit"]').click();
      });

      it("should fill out the review form and press the reset button and check if fields are empty again", () => {
        const ratingSelected = "Excellent"

        //Fills in the form
        cy.get("svg[data-testid='RateReviewIcon']").eq(0).click();

        cy.get('input[name="author"]').type('John Doe');
        cy.get('textarea[name="review"]').type('Testing writing into a review form using Cypress.');
        cy.get('#select-rating').click();
        cy.get('li').contains(ratingSelected).click();

        cy.get('button[type="reset"]').click();

        // Checks for the reset values if they were reset and dont have text
        cy.get('input[name="author"]').should('have.value', '');
        cy.get('textarea[name="review"]').should('have.value', '');
      });
    });
  });