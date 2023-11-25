let movies;
const movieId = 872585; // Oppenheimer movie id

describe('MovieDetails Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/movies/872585'); //Replace the ID with whichever movie you wish to test
    });
  
    it('should display correct text on buttons', () => {
      // Checks for the text on the Similar button
      cy.get('[data-testid=similar-button]').should('contain', 'Similar');
  
      // Checks for the text on the Recommended button
      cy.get('[data-testid=recommended-button]').should('contain', 'Recommended');
  
      // Checks for the text on the Reviews button
      cy.get('[data-testid=reviews-button]').should('contain', 'Reviews');
    });

    it('should display correct information', () => {
        // Checks for genres
        cy.get('[data-testid=genres]').should('have.length.greaterThan', 0);
    
        // Checks for runtime
        cy.get('[data-testid=runtime]').should('exist');
    
        // Checks for revenue
        cy.get('[data-testid=revenue]').should('exist');
    
        // Checks for vote_average and vote_count
        cy.get('[data-testid=votes]').should('exist');
    
        // Checks for release_date
        cy.get('[data-testid=release-date]').should('exist');
    
        // Checks for production_countries
        cy.get('[data-testid=production-countries]').should('have.length.greaterThan', 0);
      });

      describe('Navbar Component', () => {
        beforeEach(() => {
          cy.visit('http://localhost:3000/movies/homePage');
        });

        it('should contain the correct text and elements for the navbar', () => {
          // Checks for the main title
          cy.get('h4').should('contain.text', 'TMDB Client');
      
          // Checks for the subtitle
          cy.get('h6').should('contain.text', 'All you ever wanted to know about Movies!');

          // Checks for the background color
          cy.get('header').should('have.css', 'background-color', 'rgb(119, 136, 153)'); // RGB value for lightslategray
        });
      
        it('should contain the correct text and elements', () => {
          // Checks for menu items
          cy.get('button').contains('Home').should('exist');
          cy.get('button').contains('Favorites').should('exist');
          cy.get('button').contains('Upcoming').should('exist');
      
          // Checks for the "More" dropdown
          cy.get("svg[data-testid='MenuIcon']").should('exist');
      
          // Checks for dropdown options
          cy.get("svg[data-testid='MenuIcon']").click();
          cy.get('li').contains('Trending').should('exist');
          cy.get('li').contains('Now Playing').should('exist');
          cy.get('li').contains('Top Rated').should('exist');
          cy.get('li').contains('Dashboard').should('exist');
        });

        describe('FilterMoviesCard Component', () => {
            beforeEach(() => {
              cy.visit('http://localhost:3000/movies/homePage');
            });
          
            it('should contain the search field, genre dropdown, sort by dropdown, and image element', () => {
                // Check for the main title
                cy.get('h1').should('contain.text', 'Filter the movies.');
            
                // Check for the search field
                cy.get('input[id=filled-search]').should('exist');
            
                // Check for the genre dropdown
                cy.get('label[id=genre-label]').should('exist');
                cy.get('#genre-select').should('exist');
            
                // Check for the sort by dropdown
                cy.get('label[id=sort-label]').should('exist');
                cy.get('#sort-select').should('exist');
              });
            
              it('should check elements inside the genre dropdown', () => {
                // Open the genre dropdown
                cy.get('#genre-select').click();
            
                // Check for each genre option
                cy.get('li').contains('All').should('exist');
                cy.get('li').contains('Action').should('exist'); 
                cy.get('li').contains('Crime').should('exist'); 
            
              });
            
              it('should check elements inside the sort by dropdown', () => {
                // Open the sort by dropdown
                cy.get('#sort-select').click();
            
                // Check for each sort option
                cy.get('li').contains('Popularity Desc').should('exist');
                cy.get('li').contains('Popularity Asc').should('exist');
                cy.get('li').contains('Release Date Desc').should('exist');
                cy.get('li').contains('Release Date Asc').should('exist');
              });
          });

          //Testing the movieCard Component

          describe('MovieCard Component', () => {
            beforeEach(() => {
              cy.visit('http://localhost:3000/movies/homePage');
            });
          
            it('should display movie details correctly', () => {
              cy.get('p').should('exist'); //Title exists
              cy.get('p').contains('2023-07-19').should('exist');
              cy.get('p').contains('8.2').should('exist');
              cy.get('button').contains('More Info').should('exist'); //Checks if More Info text exists in the button
          
              //Check if favorite icon exists
              cy.get("svg[data-testid='FavoriteIcon']").should('exist');
            });
          });
          
          describe('HomePage Component', () => {
            beforeEach(() => {
              cy.visit('http://localhost:3000/movies/homePage');
            });
          
            it('should check for Discover Movies and the navigation arrows', () => {
              cy.get('h3').contains('Discover Movies').should('exist');
              cy.get("svg[data-testid='ArrowBackIcon']").should('exist');
              cy.get("svg[data-testid='ArrowForwardIcon']").should('exist');
            });
          });
      });
  });