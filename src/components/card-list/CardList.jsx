import {Component} from 'react';
import './cardlist.styles.css'

class CardList extends Component {

    render() {

        const {monsters} = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => {
                    const {name, email, id} = monster;
                    return (
                        <div key={id}>
                            <div className='card-container'>
                                <div className='p-2 m-2' style={{
                                    backgroundImage: "radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(122, 5, 120, 0.945) 0%, rgba(15, 51, 92, 0.945) 90% )",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }}>
                                    <img alt={`monster ${name}`} className="p-2"
                                        src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                                    <div className='card-body-container text-white p-2'>
                                        <p className='card-title'>{name}</p>
                                        <p className='card-text' style={{fontSize: "14px", color: "#cc8e30"}}>{email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CardList;