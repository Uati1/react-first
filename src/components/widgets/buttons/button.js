import React from 'react';
import {Link} from 'react-router-dom';
import './button.css'
const Button = (props) => {
    let template = null;
    switch(props.type){
        case('loadmore'):
            template=(
                <div className='blue_btn' onClick={props.loadMore}>
                    {props.cta}
                </div>
            );
            break;
        case('linkTo'):
            template=(
                <Link to= {props.linkTo} className='blue_btn' onClick={props.loadMore}>
                    {props.cta}
                </Link>
            );
            break;
        default:
            template=null;
    }
    return template;
}

export default Button;