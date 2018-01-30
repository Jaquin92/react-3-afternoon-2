import React, { Component } from "react";
import Hero from "./subcomponents/Hero";
import BlogThumb from "./subcomponents/BlogThumb";
import axios from "axios";

// import axios

class Home extends Component {
  constructor() {
    super();
    this.state = {
      featured: "",
      index: 0,
      posts: [
        { title: "Loading...", image: "https://unsplash.it/900/400/?random" }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("/api/featured")
      .then(response => {
        this.setState({
          featured: response.data,
          posts: response.data,
          index: ~~(Math.random() * response.data.length) + 0
        });
      })
      .catch(console.log());
  }

  render() {
    let posts = this.state.posts.map((post, i) => (
      <BlogThumb key={post} blog={i} />
    ));

    return (
      <div className="content">
        <Hero blog={this.state.posts[this.state.index]} />
        <hr />
        <div className="blog-grid">
          {/* <BlogThumb /> */}
          {posts}
        </div>
      </div>
    );
  }
}

export default Home;
