import React from 'react';
import i1 from '../img/i1.jpeg';
import i2 from '../img/i2.jpeg';
import i3 from '../img/i3.jpeg';
import i4 from '../img/i4.jpeg';

const slidesData = [{
  item:
    <img src={i1} alt='slide-img' className='imgItem' />
}, {
  item:
    <p className='textItem'>
      Here we are! Due to my master thesis at the university,one of the requirements is the implementation of an interactive mockup for the university WebTV platform. So, I decided to make it with React. The logic isn’t complete yet. According to the project requirements the user has to see only 5 videos in the carousel and be able to cycle them over. So, moving on to the render() method I have to get a new array of 5 videos in the preview list. Inside the render(). At last, there is one important thing to notice here. In order to update states in a React component, we have to use the setState method. This method is responsible for telling React that it should update that component and its children. This is the primary way of updating your user interface.
    </p>
}, {
  item:
    <img src={i2} alt='slide-img' className='imgItem' />
}, {
  item:
    <img src={i3} alt='slide-img' className='imgItem' />
}, {
  item:
    <img src={i4} alt='slide-img' className='imgItem' />
}, {
  item:
    <video controls className='videoItem'>
      <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4' />
    </video>
}, {
  item:
    <img src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80' alt='slide-img' className='imgItem' />
}];

export default slidesData;