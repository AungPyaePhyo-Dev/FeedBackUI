import PropTypes from 'prop-types'
import React from 'react'


function Card({children, reverse}) {
  // return (
  //   <div className='card'>
  //     {children}
  //   </div>
  // )

  return <div className='card' style={{ backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'}}> { children } </div>
}


Card.defaultProps = {
  reverse : true
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool.isRequired
}

export default Card
