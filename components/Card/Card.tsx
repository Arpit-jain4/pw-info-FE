import Image from 'next/image'

type Props={
    icon: string,
    name: string,
}

const Card = ({icon, name}: Props) => {

    return(<div className='border-2 p-4 cursor-pointer flex flex-col items-center hover:border-4' >
        
    <Image src={icon} height={150} width={150} alt='logo' />
    <div className='mt-2'>{name}</div>
    
  </div>)

}

export default Card