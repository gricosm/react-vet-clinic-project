import './PetCard.scss'

const PetCard = (props) => {

    return (
        <div class='card'>
            <title class='title'>{props.name}</title>
            <a class='subtitle'>{props.type}</a>
            <a>{props.breed} {props.age}</a>
        </div>
    )

}

export default PetCard