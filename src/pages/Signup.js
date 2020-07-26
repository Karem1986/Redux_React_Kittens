import React from 'react'

export default function Signup() {



    return (
        <div>
            <h1>Signup</h1>
            <div>
                <form>
                    <label>Name:</label>
                    <input type="text" name="fname" />
                    <label>Email:</label>
                    <input type="email" placeholder="email@email.com" name="email" />

                    <label>Password:</label>
                    <input type="password" name="password" />

                </form>
            </div>
        </div>
    )
}