import './UserCard.scss'

const UserCard = (props) => {

    return (
        <div class='card'>
            <title class='title'>{props.lastname}</title>
            <a class='subtitle'>{props.name}</a>
            <a>{props.mail} </a>
        </div>
    )

}

export default UserCard