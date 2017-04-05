# Redux Blog Application

***Project Goals***

1.  Create a blog app that incorporates CRUD operations.

2.  Design multiple pages with different URL's.

3.  Store and access blog posts on a remote server.

---

***February 28, 2017***

### Exploring the API

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

### Installing React Router

Sec. 6, Lec. 71

Will install a specific version of react-router to ensure we're using the same API:

    $ npm install --save react-router@2.0.0-rc5


### Setting Up React Router

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

### Nested Components

Sec. 6, Lec. 75

The Greeting components below are children of the App component:

```
        <Route path = "/" component = { App } >
            <Route path = "greet1" component = { Greeting } />
            <Route path = "greet2" component = { Greeting } />
            <Route path = "greet3" component = { Greeting } />
        </Route>
```

To render the children, add the following line in the App component's render() method:

```     
        return (
           <div>
            { this.props.children }
           </div>
```

Conclusion:

1.  React Router maps a given URL to components.

2.  Use nested routes inside other routes to define more complex URLs.

3.  To render a child route, parent must reference `this.props.children` in its render() method.


IndexRoute from React Router

    Helper that behaves like a route

    Will display when the path matches the parent ('/'), but not the children.

---

***March 4, 2017***

### Create Index Action

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

React Router

    The user thinks they are changing pages, but they aren't.  Actually, React Router is only changing the components that are viewed on a single page.


### Fetching Data with Lifecycle Methods

Sec. 6, Lec. 80

We need to fetch data whenever URL changes.

___Lifecycle Method___

    Function on a React component class that is automatically called by React

    Types:
    1.  componentWillMount()
    2.  componentDidMount()

___Process___

1.  Change posts_index.js from a functional component to a class-based component.

2.  Define componentWillMount() method on PostsIndex class:

        componentWillMount() {
            console.log('Good time to call an action creator to fetch posts');
        }

3.  Whenever our PostsIndex component is about to mount, React will fetch the  posts data.

___Creating Containers that Call Action Creators___

1.  Import connect:
    ```
        import { connect } from 'react-redux'
    ```

2.  Import action creator:
    ```
        import { fetchPosts } from '../actions/index';`
    ```

3.  Define mapDispatchToProps() function:
    ``` 
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ fetchPosts }, dispatch)
        }
    ```

4.  Connect to component:
    ```
        export default connect(null, mapDispatchToProps)(PostsIndex);
    ```

### Creating New Posts

Sec. 6, Lec. 82

___Goal:___  Build a component with a form input linked to the route '/posts/new' that allows a user to add a title, categories, and content.

___Process___

1.      Scaffold component to show form
    
2.      Add component to routes file as new URL 'posts/new' that user can navigate.
    
3.      Implement 'Add Posts' button in '/' component to navigate to form component

4.      Add form to PostsNew component.

        - Whenever user submits a post, it should call an
        action creator that makes a request to save the blog post.

5.      Create action creator and update reducer.

---

___March 16, 2017___

### Navigation with the Link Component

Sec. 6, Lec. 83

Goal:   Complete Step 3
Build an 'Add Post' button on the '/' component to navigate
to the 'posts/new' component.

Navigating between different routes with React-Router is straightforward.

React-Router has 'Link' component that links a component from one
route to a component on another route:
    
    // in posts_index.js:

    // import the Link component
    import { Link } from 'react-router'

The Link component renders just like any other component, and
when it does, it behaves like an anchor (<a>) tag.

    // inside the render() function
    <div>
        <div className="text-xs-right">
            <Link to="/posts/new" className="btn btn-primary">
                Add a Post
            </Link>
        </div>
        List of blog posts
    </div>
    

### Forms and Form Submission

Sec. 6, Lec. 84

___Goal:___   Complete Step 4 -- build form for '/posts/new'

Will implement form validation for inputs:
- text for all fields
- highlighting input as red

1.  Install 'redux-form' library
    
        $ npm install --save redux-form

2.  Hook up redux-form to reducer

    - in /reducers/index.js:

        import { reducer as formReducer } from 'redux-form'

---

___March 18, 2017___

### Passing Control to Redux Form

Sec. 6, Lec. 86

- With the reduxForm helper function, we created a new form called PostsNewForm with three fields: title, categories, and content

- Similar to how connect() injects props into our component, so does reduxForm()

- reduxForm() injects helpers onto this.props that can then be used inside the PostsNew component


### CreatePost Action Creator

Sec. 6, Lec. 87

- In components/posts_new.js, the handleSubmit() function needs an action creator before we can call it with the final form properties (title, categories, content).

    ````
    <form onSubmit={handleSubmit(insert action creator)}>
    ````

- GOAL: Create an action creator that will receive properties after the completed form is submitted.

    1.  Define action creator createPost() in actions/index.js.  The props passed to the action creator is an object with the properties submitted from the form.

        ````
        export function createPost(props) {
            const request = axios.post(ROOT_URL, props);
            return {
                type: CREATE_POST,
                payload: request
            };
        }
        ````

    2.  Define action type constant.
    
        ````
        export const CREATE_POST = "CREATE_POST";
        ````

### Abstracting Form State with Redux-Form

Erik Rasmussen - 8/2/2016

https://www.youtube.com/watch?v=eDTi7lYR1VU

___Recap (26:00)___

#### History

1.  HTML forms required all server rendering and processing

2.  jQuery and AJAX helped with form processing in the background, but state was still in the DOM inputs.

3.  Two-way data binding with Angular and Ember provided a hybrid solution bridging the DOM and Javascript

4.  React introuced "controlled inputs" that transferrred control of data from the DOM to JavaScript

#### React Introduced Controlled Inputs

+   What is a controlled input?

    -   An input that will __always__ render with the value it is
        given as a prop.

            <input type="text" value={username}/>

    -   So no matter what you try and type into this input, it will
        always render the username as the value.

+   Why is this important?

    -   It takes control away from the DOM.  JavaScript controls the data, not the DOM.

    -   Now only one canonical source of data.

    -   Developer is responsible for mutating the form state and re-rendering the input.

    -   React requires a lot of state and updating boilerplate.  So Redux provides a more efficient solution.

#### Redux (17:00)

___What is Redux?___

+   All application state kept in a single store { }
+   State is read-only
+   Update state by dispatching Actions
+   Actions are plain JavaScript objects with properties of type and data
+   State mutated functionally by Reducers
+   A Reducer is a function that takes the current state, takes the action, and returns the next state
+   Subscribers notified of changes only to their specific slice of state

___Why Redux Form?___

+   Connects form elements to Redux state
+   Provides event listeners to the form elements
+   Form elements dispatch redux actions
+   Redux actions update state
+   Which then updates form component

___Simplest Redux Form___

1.  __Submit Function__

    - doesn't take an event or call preventDefault()

    - just given values, Redux Form doesn't care what you do
    with these values (AJAX, local storage)

    - submit form can potentially return a promise

2.  __Form Component__ (22:00)

    -   does not contain state
    
    -   so simple can use React's new stateless function component syntax and
        fat arrow syntax

    -   just given props and spit out React components

3.  __Field__
    
    -   don't use inputs directly, use special component Field

    -   does all the heavy lifting:
    
            connects to Redux store

            injects props like value, onChange(), and onFocus() into the form component

    -   required properties:
    
            name -> name of field

            component -> what to render

    -   component types:

            string - 'input', 'text, 'textarea', etc.
        
            custom component

    -   Field doesn't care about all the other props passed to input

4.  __handleSubmit()__  (23:20)

    -   give to form onSubmit()

    -   two ways to use:
    
        +   just pass handleSubmit()

            Redux Form will look for an onSubmit() prop that was given to your component by the container

        +   self-contained submission within form component

            Can provide own submission

    -   responsibilities:
    
        +   ensure validation passes

        +   maintains submitting state if async
        
        +   receiving back submission errors (on server) and display on form

5.  __Decorate Component__ (25:00)

    -   name given for form will be used as the key in Redux store
    
    -   creates a higher-order component, provides it props

---

___April 4, 2017___

### Navigating on Blog Post Submit

Sec. 6, Lec. 90

___Goal:___  Add some kind of feedback, like navigation, after the user
submits a blog post.

+    After clicking submit _and_ post successfully created, we should navigate the user back to list of posts (index).

+    Use react-router helper method called 'push'.  This method will automatically route the user to the updated path.

+    Challenge is getting access to the 'push' method.

___What is 'context'?___

+   Accessing the router is accomplished through a component property called 'context'.

+   'Context' is a lot like props.  It is information passed from a parent component to a child component.

+   Don't have to deliberately pass 'context' from parent to child.  Child can just access this data.

+   Avoid using 'context' as much as possible!  The API is still in flux.

___Process___

1.    In posts_new.js, define an object contextTypes on the PostsNew class:

```
        static contextTypes = {
            router: PropTypes.object
        }
```

2.    React interprets the contextTypes object whenever an instance of the PostsNew class is created.

3.    React will search all of PostsNew's parent components until it finds a piece of context called 'router'.

    -    Will go back to index.js and find the <Router> component in the ReactDOM.render method.

    -    `<Router>` provides the context


### Mapping Posts in Index

Sec. 6, Lec. 91

___Goal:___    Map state to props in posts_index.js and render all blog posts.

___Process___

1.  Define mapStateToProps function with posts as a property:

```
        function mapStateToProps(state) {
            return { posts: state.posts.all };
        }
```

2.  Add mapStateToProps to the Redux connect() method:

```
        export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
```

3.  Create unordered list in render() method:

```
        <ul className="list-group">
            { this.renderPosts() }
        </ul>
```

4.  Define renderPosts() method to map and render each blog post:

```
        renderPosts() {
            return this.props.posts.map(post => {
                return (
                    <li className="list-group-item" key={post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </li>
                );
            });
        }
```

---

___April 5, 2017___

### Delete Action Creator

Sec. 6, Lec. 95

___Goal:___  Create an action creator to delete posts.


### ReactRouter and ReduxForm WrapUp

Sec. 6, Lec. 97

___Wrapup___

-   React Router
    +    Determines what components to render on the screen at any given time.
    +    Uses '/' as the index URL and references all other routes from there:
    
            <Route path = "/" component = { App } >
                <IndexRoute component = { PostsIndex } />
                <Route path = "posts/new" component = { PostsNew } />
                <Route path = "posts/:id" component = { PostsShow } />
            </Route>
    
    +    `<IndexRoute />` always returns to the index component page.

