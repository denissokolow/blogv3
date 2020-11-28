import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Posts.css";

const postDelete = (id) => {
  axios.delete(`http://localhost:3000/api/posts/${id}`, {id})
}

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
                    posts:[]
                  };
    }

    componentDidMount() {
      axios.get('http://localhost:3000/api/posts')
      .then (res => res.data)
      .then (posts => this.setState( {posts} ));
    }   

    componentDidUpdate() {
      axios.get('http://localhost:3000/api/posts')
      .then (res => res.data)
      .then (posts => this.setState( {posts} ));
    }  
    

    render(){
      return (
        <div className="Posts" >
        {this.state.posts.slice(0).reverse().map(post =>
          <div key={post.id} className="wrapper">
            <button
                    onClick= { () => postDelete(post._id)}
                    className = "delete"
                    type = "submit"
                    >               
            </button>
            <Link to = {{
                        pathname: `api/posts/${post._id}`,
                        state: {id : post._id}
                        }} className= "detail" > ... </ Link>
            <div>
              <b>Author:</b> {post.author}
            </div>
            <div>
              <b>Date:</b> {post.date}
            </div>
            <div>
              <b>Titile:</b> {post.title}
            </div>
            <div>
              <b>Message:</b><br></br>
              <div className = "poststextpole">
                {post.content}
              </div>
            </div>
         </div>
        )}
      </div>
      );
    };
}
  
export default Posts;