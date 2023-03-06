import { Component } from "react";
import './searchbox.styles.css';

class SearchBox extends Component {

    render() {
        return (
            <input
                className={`search-box ${this.props.className} mt-4 mb-5 p-3`}
                style={{width : "15rem"}}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default SearchBox;