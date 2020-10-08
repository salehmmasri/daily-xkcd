export default function UserDetails(props){
    return (
        <>  <h1>{props.users.title}</h1>
            <img src={props.users.img}></img>
        </>
    )
}

export async function getServerSideProps(context){
    const id = context.query.id
    const res = await fetch(`https://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: {users: dataObj} };

}