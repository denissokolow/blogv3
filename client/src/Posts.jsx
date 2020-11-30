import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Posts.css";

const postDelete = (id) => {
  axios.delete(`http://localhost:3001/api/posts/${id}`, {id})
}

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
                    posts:[]
                  };
    }

    componentDidMount() {
      axios.get('http://localhost:3001/api/posts')
      .then (res => res.data)
      .then (posts => this.setState( {posts} ));
    }   

    componentDidUpdate() {
      axios.get('http://localhost:3001/api/posts')
      .then (res => res.data)
      .then (posts => this.setState( {posts} ));
    }  
    

    render(){
      return (
        <div className="Posts" >
        {this.state.posts.slice(0).reverse().map(post =>
          <div key={post.id} className="wrapper-posts">
           
            <div className="nameplate-posts">
              <b>Author:</b> &nbsp;{post.author}
            </div>
            <div className="nameplate-posts">
              <b>Date:</b> &nbsp; {post.date}
            </div>
            <div className="nameplate-posts">
              <b>Titile:</b> &nbsp; {post.title}
            </div>
            <div className = "text-pole-posts">
                {post.content}
            </div>
            <button
                    onClick= { () => postDelete(post._id)}
                    className = "delete-posts"
                    type = "submit"
                    > delete
            </button>
            <Link to = {{
                        pathname: `api/posts/${post._id}`,
                        state: {id : post._id}
                        }} className= "detail-posts" > detail </ Link>
         </div>
        )}
      </div>
      );
    };
}
  
export default Posts;