import React from 'react'

export default function Header() {
    return (
        <header className='header_js'>
            <div class="main">
                <a href="/">Main page</a>
            </div>

            <div class="friends">
                <a href="/friends">Friends</a>
            </div>

            <div class="profile">
                <a href="/profile">Profile</a>

            </div>
        </header>
    )
}