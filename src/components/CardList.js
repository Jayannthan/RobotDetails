import React from "react";
import Card from '../components/Card';
import '../containers/App'
const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
                );
            })}
        </div>
    );
}

export default CardList;