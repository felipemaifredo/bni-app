
//
import styles from "./styles/home_page.module.css"

//
import Image from "next/image"

//assets
import bniImg from "@/src/resourses/assets/temp.jpg"
import logoImg from "@/src/resourses/assets/logo.jpeg"
import tempImg from "@/src/resourses/assets/temp.jpg"
import Link from "next/link"

//
const blackUsers = [
    {
        name: "Jhon Didoe",
        role: "Diretor Distrital",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }, {
        name: "Jhon Didoe",
        role: "Diretor Executivo",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }, {
        name: "Jhon Didoe",
        role: "Diretor Regional Sul",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }, {
        name: "Jhon Didoe",
        role: "Diretora da área de Cach. de Itapemirim-ES",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    },
]

const redUsers = [
    {
        name: "Jhon Didoe",
        role: "Presidente",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }, {
        name: "Jhon Didoe",
        role: "Vice-Presidente",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }, {
        name: "Jhon Didoe",
        role: "Secretário tesoureiro",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    },
]

const yellowUsers = [
    {
        name: "Jhon Didoe",
        role: "Embaixador",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }, {
        name: "Jhon Didoe",
        role: "Diretora Consultora",
        link: "/users/link-1",
        img: logoImg,
        logo: tempImg
    }
]

const otherUsers = [
    {
        name: "Jhon Didoee",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    }, {
        name: "Jhon Didoe",
        img: logoImg,
        link: "/users/link-1",
    },
]

//
const RenderUserCard = ({ color, user }: { color: string, user: any }) => {

    return (
        <Link href={user.link} className={styles.user_card}>
            <span className={styles[color]}> {user.role} </span>
            <div>
                <Image
                    src={user.img}
                    width={100}
                    height={100}
                    alt={`Imagem do ${user.name}`}
                />
                <div>
                    <span>{user.name}</span>
                    <Image
                        src={user.logo}
                        width={150}
                        height={40}
                        alt={`Imagem do ${user.name}`}
                    />
                </div>
            </div>
        </Link>
    )
}

//
export const HomePage = () => {
    return (
        <div className={styles.home_page}>
            <div className={styles.home_container}>
                <div className={styles.inputs_container}>
                    <Image
                        src={bniImg}
                        width={81.6}
                        height={50.6}
                        alt="Imagem logo"
                    />
                    <input
                        placeholder="Quem está buscando?"
                    />
                </div>
                {blackUsers.map((user: any, index: number) => (
                    <RenderUserCard
                        key={index}
                        color="black"
                        user={user}
                    />
                ))}
                {redUsers.map((user: any, index: number) => (
                    <RenderUserCard
                        key={index}
                        color="red"
                        user={user}
                    />
                ))}
                {yellowUsers.map((user: any, index: number) => (
                    <RenderUserCard
                        key={index}
                        color="yellow"
                        user={user}
                    />
                ))}
                <div className={styles.separator}></div>
                {otherUsers.map((user: any, index: number) => (
                    <Link href={user.link} key={index} className={styles.normal_user_card}> 
                        <Image
                            height={100}
                            width={100}
                            src={user.img}
                            alt={`Imgem do ${user.name}`}
                        />
                        <span>{user.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
