import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import HomePostCard from '../components/HomePostCard';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import { firestore } from '../firebase/config';

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const postId = params.id;

  // when this ccomponent loads gets all the post fro the DB of firebase
  useEffect(() => {
    setLoading(true);
    const getPost = async () => {
      const res = await getDoc(doc(firestore, `posts/${postId}`));
      // console.log();
      if (res.data()) {
        setPost({ id: res.id, ...res.data() });
        setLoading(false);
      } else {
        setLoading(false);
        setPost(null);
      }
    };
    getPost();
  }, [postId]);
  return (
    <div>
      <Header />
      <div className='mt-14 mx-auto h-screen max-w-4xl p-1'>
        {/* when no data present loading will be true */}
        {loading ? (
          <Loading />
        ) : (
          <>{post ? <HomePostCard post={post} /> : <NotFound />}</>
        )}
      </div>
    </div>
  );
};

export default Post;
