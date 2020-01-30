// src/js/components/List.js
import React from "react";
import Button from "./Button";
import { connect }
from "react-redux";
import { getData, deleteAll } from "../actions/index";
const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getData();
    }
    delete = (event) => {
        this.props.deleteAll();
    }

    render() {
        const filas = this.props.articles.map(el => (
                    <li key={Math.random()}>{el.title}</li>
                    ));
        return (<div>
        <input type="button" value="delete" onClick={this.delete}/>
        <ul>
            {filas}
        </ul>
    </div>
                );
    }
}

const List = connect(mapStateToProps,
        {getData, deleteAll})(ConnectedList);
export default List;