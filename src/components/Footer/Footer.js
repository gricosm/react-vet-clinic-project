import './Footer.scss'

const Footer = () => {
    return (
        <div class='footer'>
         <section class='footer-text'>
             <p>React Vet Clinic</p>
             <p>Tu clínica Veterinaria de confianza.</p>
         </section>
         <section class='footer-logos'>
             <div>
                <small>GRSM 2021</small>
             </div>
             <div>
                <Link class='icon' to='/' target='_blank'/>
                <Link class='icon' to='/' target='_blank'/>
                <Link class='icon' to='/' target='_blank'/>
             </div>
         </section>
        </div>
    )
}

export default Footer