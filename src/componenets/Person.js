import PropTypes from 'prop-types'

export const Person = (props) =>{
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.age}</p>
            <p>{props.isMarried ? "Maried" : "Not maried"}</p>
            
            {props.friends.map((friend) => (<p>{friend}</p>))}

          
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string,
    email : PropTypes.string,
    age : PropTypes.number,
    isMarried: PropTypes.bool,
    friends : PropTypes.arrayOf(PropTypes.string)
};