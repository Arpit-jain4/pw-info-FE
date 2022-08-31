import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import capitalize from "../../common/utils/capitalize";
import Card from "../../components/Card";


  

const Centers: NextPage = () => {
    const router = useRouter()
    const type = router.query.type
    const getPathshalaList = ()=> {
        return [
            {
                name: 'Kota', 
                id:'1',
                image: '/images/logo.png'
            },
            {
                name: 'Lucknow', 
                id:'2',
                image: '/images/logo.png'
            },
            {
                name: 'Kota', 
                id:'3',
                image: '/images/logo.png'
            }
        ]
    }
    const [centers, setCenter] = useState(getPathshalaList())

    return (
    <div>
        <div className="text-3xl shadow-lg py-4 px-6 font-medium mb-3">{capitalize(type as string)}</div>
        <div className="flex flex-row gap-4 p-2 max-w-3xl justify-start mx-3">{centers.map((el)=><div key={el.id} onClick={() => router.push(`/centers/center/${el.id}`)}><Card name={el.name} icon={el.image}/></div>)}</div>
    </div>)
}

export default Centers