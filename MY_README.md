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



