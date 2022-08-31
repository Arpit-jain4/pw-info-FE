import { NextPage } from "next";
import { useRouter } from "next/router";
import {  useState } from "react";
import { CenterDetails, Policy } from "../../../common/schema";

const Details: NextPage = () => {
    const router = useRouter()
    const id = router.query.id

    const [activePolicy, setActivePolicy] = useState({} as Policy);
    const detail: CenterDetails = {
        name: 'Kota',
        id: '1',
        policy: [{
            name: 'Admission policy',
            text: '',
            fileId: {name: '',
            id: '',
            base_url: '',
            key: ''},
            link: '',
            id:'1'
        }, 
        {
            name: 'Discount',
            text: '',
            fileId: {name: '',
            id: '',
            base_url: '',
            key: '',},
            link: '',
            id: '2'
        }, 
        {
            name: 'Privacy policy',
            text: '',
            fileId: {name: '',
            id: '',
            base_url: '',
            key: '',},
            link: '',
            id: '3'
        }]
    }
    
return(<><div>
<div className="text-3xl shadow-lg py-4 px-6 font-medium mb-3">{detail.name}</div>
    <div className="grid grid-cols-12">
            <div className="flex flex-col gap-4 justify-start col-span-12 sm:col-span-2 border-r-2 h-screen ">
                
                
                    {detail.policy.map((el) => {
                        return <div className="border-b-2 p-2 cursor-pointer" key={el.id} onClick={() => {setActivePolicy(el)}}>{el.name}</div>
                    })}
                
                
            </div>
            <div className="col-span-12 sm:col-span-10" >
                {activePolicy?.name}
            </div>
    </div>


</div></>)
}

export default Details;