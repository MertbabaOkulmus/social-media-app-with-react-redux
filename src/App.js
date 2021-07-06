import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import {AddPostForm} from './features/posts/AddPostForm';
import {EditPostForm} from './features/posts/EditPostForm';
import {PostsList} from "./features/posts/PostsList"
import {SinglePostPage} from "./features/posts/SinglePostPage"
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm/>
                <PostsList/>
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/posts/:postId" //singlePostPage de ki postId ile url de ki post id nin aynı olması gerekli
            component={SinglePostPage} //bu url geldiği zaman bu companeneti çağır
         />
         <Route
            exact
            path="/editPost/:postId"
            component={EditPostForm}
         />
         <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
