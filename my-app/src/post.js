import React from 'react'

export default function Post(props) {
    return (
        <div>
            <h1>{props.postTitle}</h1>
            <p>
                {props.text}
            </p>
        </div>
    )
}
