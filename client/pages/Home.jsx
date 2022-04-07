import React, { useEffect } from 'react';

const Home = () => {
    // useEffect(() => {
    //     (async () => {
    //         const res = await fetch("http://localhost:3000/api/user");
    //         const users = await res.json();
    //         console.log(users);
    //     })();
    // }, [])


    return (
        <>
            <div className="container text-center">
                <div className="row">
                    Home Page
                </div>
            </div>
        </>
    );
}

export default Home;
