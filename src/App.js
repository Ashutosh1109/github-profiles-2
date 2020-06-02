import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./styles.css";

const App = () => {
  var [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  var [number, setnumber] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100);
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      axios
        .get(
          `https://api.github.com/search/users?q=location%3ABangalore+${input}+in%3Afullname&page=${currentPage}`
        )
        .then(function(res) {
          setPosts(res.data.items);
          setLoading(false);
          setnumber(res.data.total_count);
        })
        .catch(function(error) {
          console.log(error);
        });
    };

    fetchPosts();
  }, [input, currentPage]);

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => {
    if (pageNumber === "prev" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setPage(currentPage - 1);
    } else if (pageNumber === "next") {
      setCurrentPage(currentPage + 1);
      setPage(currentPage + 1);
    } else {
      setCurrentPage(pageNumber);
      setPage(pageNumber);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Github Profiles</h1>
      <h5 className="match">Total match found {number} </h5>
      <p className="match">currentPage {page}</p>
      <input
        placeholder="Name"
        type="text"
        id="fname"
        name="fname"
        value={input}
        onChange={event => {
          var name = event.target.value;
          if (name) {
            setInput(name);
          } else {
            setInput("");
          }
        }}
      />

      <Posts posts={posts} loading={loading} />
      <Pagination number={number} paginate={paginate} />
    </div>
  );
};

export default App;
