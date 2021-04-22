import React from 'react';

class Home extends React.Component {
    render() {
        // console.log(localStorage.currUser);
        return <h1>Hello, {JSON.parse(localStorage.currUser).username}!</h1>
    }
}

export default Home;