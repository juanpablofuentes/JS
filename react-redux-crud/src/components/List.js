import React from "react";
import { connect } from "react-redux";
import { deleteId, editArticle } from "../actions/index";
const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (id) => {
        this.props.deleteId(id);
    }
    handleEdit = (id, title) => {
        this.props.editArticle({title: title, id: id});
    }

    render() {
        const filas = this.props.articles.map(el => (
                    <li key={el.id}>{el.title} 
                        <input type="button" value="edit" onClick={() => this.handleEdit(el.id, el.title)}/>
                        <input type="button" value="delete" onClick={() => this.handleDelete(el.id)}/></li>
                    ));
        return (<div>
    
        <ul>
            {filas}
        </ul>
    </div>
                );
    }
}
const List = connect(mapStateToProps, {deleteId, editArticle})(ConnectedList);
export default List;