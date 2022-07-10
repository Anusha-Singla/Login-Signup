***********SETUP STORE*********
1. Create a new react app using "npx create-react-app my-app".

2. Then install redux, react-redux, redux-logger, redux-thunk, redux-devtools-extension.

3. Create a folder named "stores".

4. Create a file RootReducer.js inside stores folder & combine all the reducers in it.

const combineReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer
})
const rootReducer = (state, action) => {
    return combineReducer(state, action)
}

5. Then create Store.js file inside stores folder & include rootReducer & thunk in the createStore

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

6. Then inside index.js file wrap your app with Provider  
<Provider store={store}>
    <App />
</Provider>

7. Then create appDispatch.js file inside stores folder

const store = configureStore ({
    reducer: rootReducer
})

8. Create index.js file inside stores folder and export all services from there.

9. Now create all the files of a particular component.

a. RegisterType

b. RegisterAction

c. RegsiterReducer

d. RegisterService 

for your Regsiter Component.

10. For server install JSON Server using "npm install json-server".
11. Create "db.json" file with some dummy data outside the src folder
11. Run the json server on any port using "npx json-server --watch db.json --port 8000"

This is how you can set up the redux-store and use the JSON server in your project
