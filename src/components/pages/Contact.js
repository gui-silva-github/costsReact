import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Contact(){

    return (

        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Entre em contato com o desenvolvedor do projeto: Guilherme Silva!</p>
            <a href="mailto:guilhermeviniciusbispodasilva@gmail.com">guilhermeviniciusbispodasilva@gmail.com</a>
            <img src={savings} alt="Costs"/>
        </section>

    )

}

export default Contact;