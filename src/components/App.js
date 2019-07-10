import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import BoardList from './boards/BoardList'
import BoardShow from './boards/BoardShow'
import BoardCreate from './boards/BoardCreate'
import BoardEdit from './boards/BoardEdit'
import BoardDelete from './boards/BoardDelete'
import Header from './Header'
import history from '../history'


  const App = () => {
    return (
      <div className='ui container'>
        <Router history={history}>
          <Header/>
          <Switch>
            <Route path='/' exact component={BoardList} />
            <Route path='/boards/new' exact component={BoardCreate} />
            <Route path='/boards/:id' exact component={BoardShow} />
            <Route path='/boards/edit/:id' exact component={BoardEdit}/>
            <Route path='/boards/delete/:id' exact component={BoardDelete}/>
          </Switch>
        </Router>
      </div>
      )
    }


export default App;
