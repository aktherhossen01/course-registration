/* eslint-disable react/jsx-key */
import { BsBook  } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/Card';


const Home = () => {
    const [card, setCard]= useState([])
    const [bookmark,setBookmark]= useState([])
    const [credit,setCredit]=useState(0)
    const [remaining,setRemaining]=useState(20)

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res =>res.json())
        .then(data =>setCard(data))
    },[])

    const handalClick= itemCard =>{
        const isExist = bookmark.find(fid=>fid.id === itemCard.id)
        let count = itemCard.credit
        if(isExist){
            toast('this item already exist')
        }else{


            bookmark.forEach((item =>{
                count +=item.credit
            }))

            if(count >20){
                toast('credit complete 20')
            }else{

                setCredit(count);
            }

            const totalRemaining = 20 - count
            if(totalRemaining <0){
                toast('Negative not allowed')
            }else{

                setRemaining(totalRemaining);
            }

            setBookmark([...bookmark,itemCard])
        }
    }

    return (
        <div className="flex gap-4 mx-auto container">
            <div className="w-2/3">
                <div className="grid grid-cols-3 gap-2 ">
                    {card.map(item=>(
                       <div key={item.id} className="space-y-3 shadow-lg rounded-md p-3">
                         <img className="p-3" src={item.image} alt="" />
                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                        <p>{item.des}</p>
                        <div className="flex items-center gap-6">
                           <div className='flex items-center'>
                           <p><FiDollarSign></FiDollarSign></p>
                            <p>Price: {item.price}</p>
                           </div>
                            <div className='flex items-center gap-2'><p><BsBook></BsBook></p>
                            <p>Credit: {item.credit}hr</p></div>
                        </div>
                        <button onClick={()=>handalClick(item)} className='card-containaer w-full bg-sky-700 p-2 text-white inset-x-0 bottom-0 rounded-md'>Select</button>
                        <ToastContainer></ToastContainer>
                       </div>
                    ))}
                </div>
            </div>
                    <div className="w-1/3">
                        <Card remaining={remaining} credit={credit} bookmark={bookmark}></Card>
                    </div>
        </div>
    );
};

export default Home;