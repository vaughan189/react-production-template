import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/NavBar/Navbar';
import BlogTile from '../../components/Card/Card';

import { HomeActions } from '../../state/Actions';

export default function Home() {
  const posts = useSelector((state) => state.Home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.getAllPosts());
  }, []);

  return (
    <>
      <Navbar />
      {posts.loading && <em>Loading posts...</em>}
      {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
      {posts.items && (
        <div className="container mx-auto my-5">
          {posts.items.map((post, index) => (
            <BlogTile key={index} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
