import {React , useState} from 'react'
import { Route, Switch } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import '../src/Components/Assets/style/style.css'
import SideBar from './Components/Layout/sidebar/sidebar';
import Content from './Components/Layout/content/Content';
import Login from './Components/Login/Login';


function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const token = localStorage.getItem("email");
  console.log(token)

  let redirectToUrl;
  if (!token) //check condition
  {
    redirectToUrl = <Redirect to={Login} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        {redirectToUrl}
        <Switch>
          <Route path="/" exact component={Login} />
          <>
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
          </>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
