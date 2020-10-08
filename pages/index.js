import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header />
        <h2>{props.users.month} {props.users.year}</h2>
        <img src={props.users.img} />
        <Footer  users={props.users.num}/>
    </div>
  )
}

export async function getServerSideProps(){
  // Call api here
  // Add data to props
  const res = await fetch('https://xkcd.com/info.0.json');
  const dataObj = await res.json();
  console.log(dataObj);
  return { props: {users: dataObj} };
}
