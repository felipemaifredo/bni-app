
//
import styles from "./styles/user_page.module.css"

//
import bniImg from "@/src/resourses/assets/temp.jpg"
import { IoHomeSharp } from "react-icons/io5"
import { FaWhatsapp } from "react-icons/fa"

//
import Link from "next/link"
import Image from "next/image"

//
export const UserPage = ({ data }: any) => {
    return (
        <div className={styles.user_page}>
            <div className={styles.user_container}>
                <div className={styles.link_container}>
                    <Link href={"/"}> 
                        <IoHomeSharp />
                        Voltar
                    </Link>
                </div>
                <Image
                    src={data.img}
                    height={180}
                    width={180}
                    alt="Imagem"
                    className={styles.user_img}
                />
                <p>{data.name}</p>
                <div className={styles.emp_container}>
                    <Image
                        src={data.logo}
                        width={150}
                        height={100}
                        alt="Imagem"
                    />
                    {data.roles.map((item: any, key: number) => (
                        <p key={key}>{item}</p>
                    ))}
                </div>
                <div className={styles.references_container}>
                    <p>Pedidos de Referência:</p>
                    <div>
                        {data.references.map((item: any, key: number) => (
                            <p key={key}>{item}</p>
                        ))}
                    </div>
                </div>
                <Link href={"/"} className={styles.wpp_btn}> 
                    <FaWhatsapp />
                    WhatsApp
                </Link>
                <Image
                    src={bniImg}
                    width={121.6}
                    height={90.6}
                    alt="Imagem logo"
                />
            </div>
        </div>
    )
}
