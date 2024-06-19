import React from 'react'
import Posts from './Posts'
import data from './data'

export default function Main(props) {
  return (
    <div>

      <Posts posts={props.data}/>

    </div>
  )
}
