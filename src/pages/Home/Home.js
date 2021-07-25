import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/NavBar/Navbar';
import BlogCard from '../../components/BlogCard/BlogCard';

import { HomeActions } from '../../state/Actions';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const posts = useSelector((state) => state.Home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.getAllPosts());
  }, []);

  return (
    <>
      <Navbar />
      {posts.loading && <Loader />}
      {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
      {posts.items && (
        <div className="container mx-auto my-5">
          {posts.items.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
