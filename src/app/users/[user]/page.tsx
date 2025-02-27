
//
type PageTypes = {
    params: Promise<{ user: string }>
}

//
import { UserPage } from "@/src/ui/pages/UserPage"

//assets
import logoImg from "@/src/resourses/assets/logo.jpeg"
import tempImg from "@/src/resourses/assets/temp.jpg"

//
async function getServerSideData(user: string) {
    return {
        name: "Jhon Didoe",
        img: logoImg,
        logo: tempImg,
        wNumber: "xxxxxxx",
        roles: [
            "Diretor Distrital",
            "Diretor Distrital"
        ],
        references: [
            "Diretor Distrital",
            "Diretor Distrital"
        ]
    }
}

//
export default async function page({ params }: PageTypes) {
    const data = await getServerSideData((await params).user)

    return <UserPage data={data} />
}
