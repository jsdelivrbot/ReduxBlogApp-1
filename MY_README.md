#Redux Blog Application#

***Project Goals***

1.  Create a blog app that incorporates CRUD operations.

2.  Design multiple pages with different URL's.

3.  Store and access blog posts on a remote server.

---

***February 28, 2017***

###Exploring the API
Sec. 6, Lec. 70

Server API located at [reduxblog.herokuapp.com](http://reduxblog.herokuapp.com).

All requests require a unique key parameter.  The key provides a simple authentication and ensures that your posts are kept in a separate bucket from other users.

No need to apply for a key, just create a unique one:
    
    reduxblog.herokuapp.com/api/posts?key=1a2b3c

***Four Available Routes***

|  Endpoint        |  Method    |  Route             
| ---------------- |:----------:| :------------------                         
|  /api/posts      |  GET       |  index => returns an array of blog posts
|  /api/posts      |  POST      |  create blog post and return saved version
|  /api/posts/:id  |  GET       |  return a single post based on the id
|  /api/posts/:id  |  DELETE    |  delete a single post based on the id

NOTE:

*   A GET request for all posts returns an array but not any post contents.

*   A GET request for a specified post returns the content of that post.

*   Requests to the API are throttled.  If too many requests are made in a short time, the server will respond with 'Retry later.'

---

***March 1, 2017***

###Installing React Router
Sec. 6, Lec. 71

Will install a specific version of react-router to ensure we're using the same API:

    $ npm install --save react-router@2.0.0-rc5


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

---

***March 3, 2017***

###Nested Components
Sec. 6, Lec. 75

The Greeting components below are children of the App component:

    <Route path = "/" component = { App } >
        <Route path = "greet1" component = { Greeting } />
        <Route path = "greet2" component = { Greeting } />
        <Route path = "greet3" component = { Greeting } />
    </Route>

To render the children, add the following line in the App component's render() method:

     return (
       <div>
        { this.props.children }
       </div>

Conclusion:

1.  React Router maps a given URL to components.

2.  Use nested routes inside other routes to define more complex URLs.

3.  To render a child route, parent must reference `this.props.children` in its render() method.


IndexRoute from React Router

    Helper that behaves like a route

    Will display when the path matches the parent ('/'), but not the children.

---

####March 4, 2017

###Create Index Action
Sec. 6, Lec. 77

Process:

1.  In terminal, install axios and redux-promise as development dependencies:

        $  npm install --save axios redux-promise

        axios makes our network requests
        redux-promise unwraps the promises and actions

2.  Inside index.js, wire-up redux-promise to our app as a middleware:

        import promise from 'redux-promise';

        // ensures that actions flow through promise middleware before
        // reaching the reducers
        const createStoreWithMiddleware = applyMiddleware(
            promise
        )(createStore);

3.  Define actions creator in src/actions/index.js.  Purpose is to reach out and grab the blog posts from the API.

4.  Define reducer_posts in src/reducers/reducer_posts.js.  Purpose is to receive and process the payload data from the GET request.

5.  What should our state structure look like?

        Give serious thought to how state for the app should be modeled.

        Should it be an array [], like the cities in the weather forecast?

        Should it be an object {}?

        Can change the structure of state later, but it becomes more difficult.

6.  For our blog app, look at the mockup . . .

        The index page ('/') shows a list of different blog posts.  So we definitely need an array or object to hold these posts.

        When the user requests a specific post, it is the only request that shows the post content.  For this, we need to a separate piece of state to track what the active post is.

        So we'll have two pieces of state:
        1.  An array with the lists of posts containing the title and category.
        2.  An object for the active post with the name, categories, and content.

7.  Define initial state as:

        const INITIAL_STATE = { all: [], post: null };

        { }         => state object

        all: []     => property that stores an array of all blog posts

        post: null  => the active blog post

8.  

        

React Router

    The user thinks they are changing pages, but they aren't.  Actually, React Router is only changing the components that are viewed on a single page.



