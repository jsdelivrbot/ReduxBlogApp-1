<<<<<<< HEAD
#Redux Blog App#

***Project Goals***

1.  Create a blog app that incorporates CRUD operations.

2.  Incorporate multiple pages with different URL's.

3.  Store and access blog posts on a remote server.

***February 28, 2017***
Sec. 6, Lec. 70

Server API located at reduxblog.herokuapp.com

All requests require a unique key parameter.  No need to apply for a key, just create one.  

The key provides a simple authentication and ensures that your posts are kept in a separate bucket from other users:
    
    reduxblog.herokuapp.com/api/posts?key=1a2b3c

Four Available Routes

    Endpoint        Method      Route
1.  /api/posts      GET         index => returns an array of blog posts
2.  /api/posts      POST        create blog post and return saved version
3.  /api/posts/:id  GET         return a single post based on the id
4.  /api/posts/:id  DELETE      delete a single post based on the id

NOTE:  a GET request on an individual blog post returns the content of the post; whereas a GET request on the index does not return any content.

Requests to the API are throttled.  If too many __requests__ are made in a short time, the server will respond with 'Retry later.'

*   asdfasdf
    -   asdfasdf
        +   asdfasdf
            *   adfasdf
                -   asdf
                -   asdf
                    +   asdf
    -   

Heading
=======
## Redux ##

### February 4, 2017

***What is Redux?***
Redux is a predictable state container for JavaScript apps.

Separate views in our application from the underlying data.

1.  Redux - data contained in the application
        list of books
        currently selected book
2.  React - views
        translates data into views on the screen that a user can interact with

State container => all the data that describes the app.
    a.  hard data
    b.  metadata

Other frameworks have separate collections or stores for different types of data.

With Redux, you centralize all of the application's data inside a single object.

    a.  Application level state
    b.  Global
    c.  Tells the application what data and how to render it.

Ex)  A simple counter app.  Press a + button to increase the counter by one, press the - button to decrease by one.  Display the current count.

    a. Data contained in the application (Redux)
            current count

    b.  Views contained in the application (React)
            current count
            number changer

GOAL:  Learning how to design state 



>>>>>>> 8faefd54053912993c9f96f9c593b7b0734f3070
