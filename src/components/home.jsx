import React, { useEffect, useState, Fragment } from 'react';
//import fetch from 'fetch';
import '../css/home.css';
import '../css/video.css';
import '../css/board.css';
import icon from '../img/loudboi.png';

const Modal = (props) => {
  return (
    <div className='dialog-bg'>
      <div className='dialog-center'>
        <div className='backdrop' onClick={props.onClose}></div>
        <article className='video--modal--wrapper'>
          <div className='video--modal'>
            <video controls loop className='video--item'>
              <source type='video/mp4' src={`${props.vid}`} />
              {/* <source src='/tik.mp4' type='video/mp4' /> */}
            </video>
          </div>
          <div className='video--modal--side'>
            <div className='adm--wrapper'>
              <span>
                <img alt='poster' src={icon} className='adm--profile--logo' />
              </span>
              <span className='adm__handle'> @Dopetho </span>
              {/* <span className='adm--bullet' />
                <span className='pst--view'> view </span> */}
            </div>
            <div className='pst--info'>
              {/* <p> This is the title of the video</p> */}
              {/* <span> tags tags</span> */}
            </div>
            {/* <div className='ad--wrapper'> ad ad ad </div> */}
          </div>
        </article>
      </div>
    </div>
  );
};

const Home = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [num, setNum] = useState(null);
  let [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://us-central1-wshh-264901.cloudfunctions.net/api'
      );
      return res.json().then((res) => setData(res));
    }
    fetchData();
  });

  const postComponents = data.map((post, index) => (
    <div className='video-feed__item' key={post.title}>
      <div className='feed-img'>
        <div className='img-wrapper'>
          <img className='feed-img__item' src={post.thumbnail} />
          <div className='feed-img_desc'>
            <p>{post.title}</p>
            {/* <span>{post.viewCount} View</span> */}
          </div>
          <i
            className='fas fa-play modal-video-btn'
            value='btn'
            onClick={(e) => {
              setNum(index);

              setIsOpen(!isOpen);
            }}></i>
        </div>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <section className='main-site-section-content'>
        <main className='main-content'>
          <header className='main-content-header'>
            <h1> Trending </h1>
            <p>Watch the latest videos from our community</p>
          </header>
          <article className='video-feed'>{postComponents}</article>
          {isOpen == true && (
            <Modal onClose={() => setIsOpen(!isOpen)} vid={data[num].vidLink} />
          )}
        </main>
      </section>
      <footer className='main-site-footer'>
        <div className='contanier main-site-footer-bar'>
          {/* <h4> All rights reserve </h4> */}
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
