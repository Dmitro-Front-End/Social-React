import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux"
import './helperCSS/helper.scss'
import './helperCSS/variables.scss'

export const Main_App = () => {

    return <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
    </BrowserRouter>
        
    
}