import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'
export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href=''>Space Jelly Shop</a>
        </h1>
        <p>The best space jellyfish swag in the universe!</p>

        <ul className={styles.grid}>
          {products.map(prod => (
            <Product key={prod.id} {...prod} styles={styles} />
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>Created by Davide Mezzetti</p>
      </footer>
    </div>
  )
}

function Product ({ title, image, description, price, styles }) {
  return (
    <li className={styles.card}>
      <a>
        <img src={`/images/${image}`} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{description}</p>
      </a>
    </li>
  )
}
