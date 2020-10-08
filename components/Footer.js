import Link from 'next/link'

export default function Footer(props) {
    var arrNumbers = [];
    let number
    { number = props.users }
    for (let i = 10; i > 0; i--) {
        arrNumbers.push(number - i)
    }

    return (

        <>
            <ul>
                {arrNumbers.map((num) =>
                    <Link key={num} href="/user/[id].js" as={`/user/${num}`}>
                        <a><p>{num} </p></a>
                    </Link>
                )}
            </ul>
            <p><small>@copyright ASAC</small></p>
        </>
    );
}
