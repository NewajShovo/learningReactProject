import React, { Component } from "react";
import axios from "axios";
// import { error } from "apn";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    // console.log("hello", posts);
    return (
      <div>
        List of posts
        {this.state.post.length > 0 ? (
          this.state.post.map((tempPost) => (
            <div key={tempPost.id}>{tempPost.title}</div>
          ))
        ) : (
          <div>No posts available</div> // Show message if no posts
        )}
      </div>
    );
  }
}

export default PostList;
