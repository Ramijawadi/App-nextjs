import styles from '../../styles/Rami.module.css';
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data }
  }
}

import Head from "next/head";

const ramiList = ({ users }) => {
  return <>
    <Head>

      <title> Store | StoreList</title>
      <meta name="keywords" content="Rami"></meta>

    </Head>

    <div>
      <h1> all  UsersList </h1>
      {users.map(user => (
        <Link
         
          href={"/ramirez/" + user.id}
          key={user.id}
          legacyBehavior>

          <a className={styles.single} >{user.name}</a>

        </Link>
      )
      )}
    </div>
  </>;
}

export default ramiList;