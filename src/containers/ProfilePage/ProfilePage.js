import './ProfilePage.scss'
import UserCard from '../../components/UserCard/UserCard'
import PetCard from '../../components/PetCard/PetCard'
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'

const ProfilePage = (props) => {

    return (
        <div class='container'>
            <UserCard />
            <PetCard />
            <AppointmentCard />
        </div>
    )

}

export default ProfilePage