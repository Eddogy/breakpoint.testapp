import React, { Component } from 'react';

export class Footer extends Component {
    static displayName = Footer.name;

    constructor(props) {
        super(props);
    }



render() {
    return (
        <div>
            <h1>This but a footer</h1>

            <p>Footer stuff.</p>
        </div>
    );
}
}
