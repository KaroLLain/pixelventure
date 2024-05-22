import React from 'react';


export default function Tech() {
    return (
        <section class="technologies">
        <div class="technologies--icons">
          <svg className='techIcon'>
            <use xlinkHref="/sprite.svg#icon-html5"></use>
          </svg>
          <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'> 
            <use xlinkHref="/sprite.svg#icon-css3"></use>
          </svg>
          <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'>
            <use xlinkHref="/sprite.svg#icon-sass"></use>
          </svg>
          <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'>
            <use xlinkHref="/sprite.svg#icon-javascript"></use>
          </svg>
          <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'>
            <use xlinkHref="/sprite.svg#icon-react"></use>
          </svg>
          {/* <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'>
            <use xlinkHref="/sprite.svg#icon-angular"></use>
          </svg> */}
          <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'>
            <use xlinkHref="./sprite.svg#icon-typescript"></use>
          </svg>
          {/* <span className='spaceDecorator' role="img">⁛</span>
          <svg className='techIcon'>
            <use xlinkHref="/sprite.svg#icon-mysql"></use>
          </svg>  */}
        </div>
      </section>
    )
}