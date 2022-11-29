import { Component } from "react";

class Card extends Component{
    render(){
        const {username, email, id } = this.props;
        return(
            <div className="bg-light-green dib pa3 br3 ma2 grow tc bw2 shadow-5">
                <img src={`https://robohash.org/${id}?set=set2`} alt="profilePhoto"/>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        )
    }
};

export default Card;