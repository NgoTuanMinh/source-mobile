import React from 'react';
import Svg, { Path } from 'react-native-svg'

const AddUserIcon = ({ color, size }) => {
    const svgSize = size && size.width && size.height ? size : false;
    return (
        <Svg width={svgSize ? svgSize.width : '22'} height={svgSize ? svgSize.height : '16'}
            viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C11.79 0 10 1.79 10 4C10 6.21 11.79 8 14 8ZM5 6V3H3V6H0V8H3V11H5V8H8V6H5ZM14 10C11.33 10 6 11.34 6 14V16H22V14C22 11.34 16.67 10 14 10Z" fill={color} />
        </Svg>
    )
}

export default AddUserIcon;