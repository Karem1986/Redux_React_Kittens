import React from 'react'

export default function Signup() {
    return (

        <div>
            <h1>Signup</h1>
            <div>
                <form>
                    <label for="fname">Name:</label>
                    <input type="text" name="fname" />
                    <label for="email">Email:</label>
                    <input type="email" placeholder="email@email.com" name="email" />

                    <label>Password:</label>
                    <input type="password" name="password" />

                </form>
            </div >
        </div >
    )
}