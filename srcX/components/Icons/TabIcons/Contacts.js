import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Contacts = ({ color }) => {
  return (
    <Svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M8 0C10.208 0 12 1.792 12 4C12 6.207 10.208 8 8 8C5.792 8 4 6.207 4 4C4 1.792 5.792 0 8 0ZM8 2C6.897 2 6 2.897 6 4C6 5.103 6.897 6 8 6C9.103 6 10 5.103 10 4C10 2.897 9.103 2 8 2ZM8 9C10.667 9 16 10.335 16 13V16H0V13C0 10.335 5.333 9 8 9ZM8 10.9C5.026 10.9 1.9 12.357 1.9 13V14.1H14.1V13C14.1 12.357 10.974 10.9 8 10.9ZM14 0C16.208 0 18 1.792 18 4C18 6.207 16.208 8 14 8C13.533 8 13.084 7.92 12.666 7.772C13.5 6.742 14 5.429 14 4C14 2.57 13.5 1.259 12.666 0.228C13.084 0.0800002 13.532 0 14 0ZM22 13V16H18V12.5C18 11.252 17.244 10.101 15.971 9.179C18.681 9.623 22 10.898 22 13Z" fill={color}/>
    </Svg>
  )
}

export default Contacts;