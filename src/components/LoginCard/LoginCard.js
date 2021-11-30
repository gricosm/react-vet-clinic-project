import APIConsumerUser from '../../services/apiConsumer/apiConsumerUser'
import './LoginCard.scss'

const LoginCard = () => {
    const handleChanges = async (e) => {
        e.preventDeafult()
        await APIConsumerUser.loginUser(JSON.stringify({email: e.target.email.value, password: e.target.password.value}))
    }

    return (
        <form className='form' onSubmit = {(e) => handleChanges (e)}>
            <fieldset>
                <legend class='title'>LOGIN</legend>
                <label>EMAIL</label>
                <input type='email' name='email' placeholder='Introduce tu email aquí...' required />
                <label>CONTRASEÑA</label>
                <input type='email' name='password' placeholder='Introduce tu contraseña aquí...' required />
                <input type='submit' value='login' className='button' />
            </fieldset>
        </form>
    )
}

export default LoginCard