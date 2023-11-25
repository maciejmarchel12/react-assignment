import { filterByGenre, filterByTitle } from "../support/e2e";

let movies; // List of Discover movies from TMDB

describe("sortFilter", () => {
    before(() => {
      // Get movies from TMDB and store them locally.
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
  
    describe("By movie title", () => {
        it("only display movies with 'o' in the title", () => {
          const searchString = "o";
          const matchingMovies = filterByTitle(movies, searchString);
          cy.get("#filled-search").clear().type(searchString); // Enter o in text box
          cy.get(".MuiCardHeader-content").should(
            "have.length",
            matchingMovies.length
          );
          cy.get(".MuiCardHeader-content").each(($card, index) => {
            cy.wrap($card).find("p").contains(matchingMovies[index].title);
          });
        });
        it("handles case when there are no matches", () => {
          const searchString = "xyxxzyyzz";
          cy.get("#filled-search").clear().type(searchString); // Enter o in text box
          cy.get(".MuiCardHeader-content").should("have.length", 0);
        });
      });
  
    describe('Filter functionality', () => {
      it('should filter movies by genre', () => {
        const selectedGenreId = 28; // Replace with the appropriate genre ID for 'Action'
        const selectedGenreText = "Action";
  
        const matchingMovies = filterByGenre(movies, selectedGenreId);
  
        // Open the dropdown (assuming it's initially closed)
        cy.get("#genre-select").click();

        // Select an option (replace "Action" with the desired option)
        cy.get("li").contains(selectedGenreText).click();
  
        cy.get(".MuiCardHeader-content").should(
          "have.length",
          matchingMovies.length
        );
  
        cy.get(".MuiCardHeader-content").each(($card, index) => {
          cy.wrap($card).find("p").contains(matchingMovies[index].title);
        });
      });
    });
  
    describe('Sort functionality', () => {
      it('should sort movies by release date', () => {
        const selectedSortText = "Release Date Asc"

        cy.get('#sort-select').click();
        
        cy.get("li").contains(selectedSortText).click()
      });
  
      it('should sort movies by popularity', () => {
        const selectedSortText = "Popularity Asc"

        cy.get('#sort-select').click();
        
        cy.get("li").contains(selectedSortText).click()
      });
    });
  });