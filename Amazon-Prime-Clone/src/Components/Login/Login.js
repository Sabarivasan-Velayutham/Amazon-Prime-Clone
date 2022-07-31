

import Login_page from './Login_page';
import Login_Footer from './Login_Footer';
import React, { useLayoutEffect } from "react";

export default function Login()
{
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (

        <div>
            <Login_page/>
            <Login_Footer/>
        </div>
    );
}

