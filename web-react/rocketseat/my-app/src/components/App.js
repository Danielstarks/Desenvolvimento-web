import React from 'react';  

import Post from './Post';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello world</h1>

                <Post title="Aprendendo ReactJS com a RocketSeat"/>
                <Post title="React é demais" />
                <Post title="developer front-end" />
            </div>
        );
    }
}