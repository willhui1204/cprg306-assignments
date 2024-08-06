"use client";
import React from "react";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    console.log(user);

    
    return(
        <main className="bg-black min-h-screen">
        <div className="bg-black rounded-lg">
            <h1 className=" text-4xl text-white p-2 bg-black">Shopping List App</h1>
            <div className=" shadow-md p-5 bg-black">
            <p className="text-white"> {user ? "Hello! " : "Sign in with GitHub"}</p>
            {user && user.displayName}
            <p className="p-2"></p>

            <a className="text-lg hover:underline text-white" href="/week-8/shopping-list">{user ? "Continue to your Shopping List" : ""}</a>
            
            <p className="p-4">
                {user ? (<button className="mr-2 px-4 py-2 rounded  bg-blue-600 text-white" onClick={firebaseSignOut}>Sign Out</button>) 
                : (<button className="mr-2 px-4 py-2 rounded  bg-blue-600 hover:bg-blue-500 text-white" onClick={gitHubSignIn}>Sign in with your gitHub</button>
                )}
            </p>
            </div>
        </div>
        </main>
    );
}