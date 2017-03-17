// Redux Flowchart
// March 16, 2017


// index.js

ReactDOM.render(

	<Provider store={store}>
		<Router history={history}>
			<Route path= "/" component= {App}>
				<Route path= "foo" component= {Foo}/>
				<Route path= "bar" component= {Bar}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)

/* 

	<Provider store>
		- Makes the Redux store available to the connect()
			calls in the component hierarchy.

		- Props

			- store => the single Redux store in the app

			- children => ReactElement, the root of your component hierarchy
			
