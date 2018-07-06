/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //Test to verify that every url feed is defined 
         //and not empty

         it('every url feed is defined and not empty', () => {
            allFeeds.forEach((Feed) => {
                expect(Feed.url).toBeDefined();
                expect(Feed.url.length).not.toBe(0);
            });
         });
        
         //Test to verify that every feed has a defined 
         //and not empty name
        
         it('every feed has a defined name', () => {
            allFeeds.forEach((Feed) => {
                expect(Feed.name).toBeDefined();
                expect(Feed.name.length).not.toBe(0);
            });
         });

    });

    /* New test suite named "The menu" */

    describe('The menu', () => {
 
        //Test to verify that menu element is hidden
        //by default

        it('is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test to verify that menu element changes visibility
          * when clicked; it should has two expectations: menu
          * displays if clicked, and hides if clicked again.
          */

        it('changes visibility when clicked', () => {
            //we made sure that menu is hidden by default
            $('.menu-icon-link').click(); 
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //if clicked again
            $('.menu-icon-link').click(); 
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
    });




    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
