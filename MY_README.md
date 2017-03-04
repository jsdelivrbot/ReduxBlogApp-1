#Redux Blog App#

***Project Goals***

1.  Create a blog app that incorporates CRUD operations.

2.  Incorporate multiple pages with different URL's.

3.  Store and access blog posts on a remote server.

***February 28, 2017***

###Exploring the API
Sec. 6, Lec. 70

Server API located at reduxblog.herokuapp.com

All requests require a unique key parameter.  No need to apply for a key, just create one.  

The key provides a simple authentication and ensures that your posts are kept in a separate bucket from other users:
    
    reduxblog.herokuapp.com/api/posts?key=1a2b3c

***Four Available Routes***

|  Endpoint        |  Method    |  Route             
| ---------------- |:----------:| ------------------:                         
|  /api/posts      |  GET       |  index => returns an array of blog posts
|  /api/posts      |  POST      |  create blog post and return saved version
|  /api/posts/:id  |  GET       |  return a single post based on the id
|  /api/posts/:id  |  DELETE    |  delete a single post based on the id

NOTE:  a GET request on an individual blog post returns the content of the post; whereas a GET request on the index does not return any content.

Requests to the API are throttled.  If too many __requests__ are made in a short time, the server will respond with 'Retry later.'


***March 1, 2017***

###Installing React Router
Sec. 6, Lec. 71

Will install a specific version of react-router to ensure we're using the same API:

    $ npm install --save react-router@2.0.0-rc5

Does not appear that history was installed??


###Setting Up React Router
Sec. 6, Lec. 73

*   React Router is an object that decides what components to display on the screen based on the URL
    -   Do not need `<App />` component in src/index.js
    -   Will replace App with an instance of React Router
    -   Will render App in a separate location

*   History Object

    - an object that tells React Router how to interpret changes in a URL
    - three types:
        + browserHistory
        + hashHistory
        + memoryHistory

    1.  browserHistory

        will interpret everything ***after*** the protocol:
    
            http://www.blog.com/posts/5

        when the url changes after .com/, React Router will be notified to make
    
    2.  hashHistory 
    
        will interpret everything ***after*** the "#" symbol:

            http//www.blog.com/#posts/5

    3.  memoryHistory
        
            doesn't use the URL for reading the history




