import Head from 'next/head'
import Image from 'next/image'
import styles from './Pokemon.module.css'

function Pokemon({ pokemon }) {
    const API = ''
    const myLoader=({src})=> `${API}${src}`

    return (
        <>
        <Head>
            <title>Pokemon</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className={styles.container}>
            Welcome, {pokemon?.name}
            <img src={pokemon?.sprites?.front_default} />
            <Image src={pokemon?.sprites?.front_default}  width={500} height={500}/>
            <Image loader={myLoader} src={pokemon?.sprites?.front_default} width={500} height={500}/>
        </div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
    const pokemon = await res.json()

    let paths = pokemon.results.map(p => {
        return `/pokemon/${p.name}`
    })

    // console.log(paths)
    
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // const posts = await res.json()
    // console.log(posts)
    // return {
    //     props: {
    //         posts
    //     }
    // }
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
    const pokemon = await res.json()
    return {
        props: {
            pokemon
        }
    }
}

export default Pokemon