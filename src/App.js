import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GitHubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  // const [alert, setAlert] = useState(null);


  // async componentDidMount(){   
    
  //   this.setState({loading: true});

  //   const res = await axios.get("https://api.github.com/users", {
  //     headers: { Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` },
  //   });
    
  //   this.setState({ users: res.data, loading: false });
  // }


  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );


}

export default App;
