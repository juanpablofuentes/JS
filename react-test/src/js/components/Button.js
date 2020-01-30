// src/js/components/List.js
import React from "react";


class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    delete = (event) => {
        this.props.dispatch({type: "DELETE_ARTICLE"});
    }

    render() {

        return (
                <input type="button" value="delete" onClick={this.delete}/>

                );
    }
}


export default Button;