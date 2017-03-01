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
