import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Company(){

    return (

        <section className={styles.home_container}>
        <h1>
            Bem-vindo ao <span>Costs</span>
        </h1>
        <p>O interesse de <span>Guilherme Silva</span> culminou nesse projeto que visa ajudar aqueles que gerenciam os <span>custos</span>!</p>
        <img src={savings} alt="Costs"/>
        </section>

    )

}

export default Company;