import React from "react";

export const Form = () => {
    return (
        <form action="">
            <input type="text" placeholder="Full Name..." />
            <input type="text" placeholder="Email..." />
            <input type="text" placeholder="Age..." />
            <input type="password" placeholder="Password..." />
            <input type="password" placeholder="Confirm Password..." />
            <input type="submit" />
        </form>
    );
}