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
        
        //Test suite for the RSS feeds, the allFeeds variable

    describe('RSS Feeds', () => {
        
        // Test to verify that the allFeeds array is defined
        // and not empty

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

    /* New test suite named "Initial Entries" */

    describe('Initial Entries', () => {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is 
         * at least a single .entry element within the .feed
         * container.
         */

        beforeEach((done) => {
            loadFeed(0, done);
        });

        it('there is at least a single entry element', (done) => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* New test suite named "New Feed Selection" */
    
    describe('New Feed Selection', () => {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually 
         * changes.
         */

        var firstFeed;
        var secondFeed;

        beforeEach((done) => {
            loadFeed(0, () => {
                firstFeed = $('.feed').html();

                loadFeed(1, () => {
                    secondFeed = $('.feed').html();
                done();
                });
            });
        });

        //Here we verify that the content changes
        it('content changes', () => {
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });

}());



