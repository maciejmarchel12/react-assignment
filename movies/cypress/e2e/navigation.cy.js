describe("Navigation", () => {
    let movies;
    let id;
  
    beforeEach(() => {
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      ).then((response) => {
        movies = response.body.results;
        id = movies[0].id; // Assigning the id from the first movie in the list
      });
  
      cy.visit("/movies/homePage");
    });
  
    describe("From the home page to a movie's details", () => {
      it("navigates to the movie details page and changes browser URL", () => {
        cy.get('button:contains("More Info ...")').eq(0).click();
        cy.url().should("include", `/movies/${movies[0].id}`);
      });
    });
  
    describe("Using the site header", () => {
      describe("when the viewport is desktop scale", () => {
        it("navigates via the button links", () => {
          cy.get("button").contains("Upcoming").click();
          cy.url().should("include", `/movies/upcoming`);
          cy.get("button").contains("Home").click();
          cy.url().should("include", `/`);
        });
  
        describe("From the movie details page", () => {
          beforeEach(() => {
            cy.visit(`/movies/${id}`);
          });
  
          it("navigates to the 'Recommended' page and changes browser URL", () => {
            cy.get("button").contains("Recommended").click();
            cy.url().should("include", `/movies/${id}/recommended`);
          });
  
          it("navigates to the 'Similar' page and changes browser URL", () => {
            cy.get("button").contains("Similar").click();
            cy.url().should("include", `/movies/${id}/similar`);
          });
        });


        it("navigate to Trending page", () => {
          cy.get("svg[data-testid='MenuIcon']").should('be.visible').click()
          cy.get("li").contains('Trending').should('be.visible').click();
          cy.url().should("include", `/movies/trending`);
        });
    
          it("navigate to Now Playing page", () => {
            cy.get("svg[data-testid='MenuIcon']").should('be.visible').click()
           cy.get("li").contains('Now Playing').click();
           cy.url().should("include", `/movies/nowPlaying`);
        });
    
         it("navigate to Top Rated page", () => {
           cy.get("svg[data-testid='MenuIcon']").should('be.visible').click()
           cy.get("li").contains('Top Rated').click();
           cy.url().should("include", `/movies/topRated`);
         });
      });
    });
  
    describe("From the favorites page to a movie's details", () => {
      it("navigates to the movie details page and changes browser URL", () => {

        cy.get("button").contains("Favorites").click();
        cy.url().should("include", `/favorites`);

        cy.get("button").contains("Home").click();
        cy.url().should("include", `/movies/homePage`); //siteheader component had the wrong url link fixed it now
  
        cy.get('button:contains("More Info ...")').eq(0).click();
        cy.url().should("include", `/movies/${movies[0].id}`);
      });
    });
  
    describe("The forward/backward links", () => {
      beforeEach(() => {
        cy.get('button:contains("More Info ...")').eq(0).click();
      });
  
      it("navigates between the movies detail page and the home page", () => {
        cy.get("svg[data-testid='ArrowBackIcon']").click();
        cy.url().should("not.include", `/movies/${movies[0].id}`);
        cy.get("svg[data-testid='ArrowForwardIcon']").click();
        cy.url().should("include", `/movies/${movies[0].id}`);
      });
    });
  });