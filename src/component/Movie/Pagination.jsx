import React from 'react'
import { 
    MdOutlineKeyboardDoubleArrowRight, 
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardArrowLeft
 } from "react-icons/md";

const Pagination = ({setPage, page, totalPages}) => {

    const getNumberUnderTree = () =>{
       if(page >3 ){
        return null
       }else{
        let result = [];
        for(let i=1 ; i <= page + 2; i++){
            result.push(i)
        }
        return [...result, '...', totalPages];
       }
    }
    const getNumberLast = () => {
        if (page <= totalPages && page>=98) {
            let result = [];
            for (let i = totalPages; i >= page - 2; i--) {
                result.push(i);
            }
            return [1, '...',...result.reverse()];
        } else {
            return null;
        }
    }
    const getMidLast = () => {
        if (page <= 97 && page>=4) {
            let result = [];
            for (let i = (page-2); i <= page+2; i++) {
                result.push(i);
            }
            return [1, '...',...result,'...',totalPages];
        } else {
            return null;
        }
    }

  return (
    <div className='py-10'>
    <div className='flex gap-3 justify-center items-end'>
      <button
        className='bg-red-800 px-2  border text-white py-1 rounded-lg disabled:opacity-70 hover:opacity-90'
        onClick={() => setPage(1)}
        disabled={page <= 1}
      >
        <MdOutlineKeyboardDoubleArrowLeft size={23}/>
      </button>
      <button
        className='bg-red-800 px-2  border text-white py-1 rounded-lg disabled:opacity-70 hover:opacity-90'
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
      >
        <MdOutlineKeyboardArrowLeft size={23}/>
      </button>
      {getNumberUnderTree()?.map((data,idx)=> (
      <button key={idx} className={`${data == page ? 'text-red-500 ': 'text-white'} border font-bold px-3 py-1 rounded-lg`}
        disabled={data == '...'}
      onClick={()=>setPage(data)}>{data}</button>
      ))
      }
      {getNumberLast()?.map((data,idx)=> (
     <button key={idx} className={`${data == page ? 'text-red-500 ': 'text-white'} border font-bold px-3 py-1 rounded-lg`}
        disabled={data == '...'}
      onClick={()=>setPage(data)}>{data}</button>
      ))
      }
       {getMidLast()?.map((data,idx)=> (
     <button key={idx} className={`${data == page ? 'text-red-500 ': 'text-white'} border font-bold px-3 py-1 rounded-lg`}
        disabled={data == '...'}
      onClick={()=>setPage(data)}>{data}</button>
      ))
      }
      <button
        className='bg-red-800 px-2 py-1 border text-white rounded-lg disabled:opacity-70 hover:opacity-90'
        onClick={() => setPage(page + 1)}
      >
        <MdOutlineKeyboardArrowRight size={23} />
      </button>
      <button
        className='bg-red-800 px-2 py-1 border text-white rounded-lg disabled:opacity-70 hover:opacity-90'
        onClick={() => setPage(totalPages)}
      >
        <MdOutlineKeyboardDoubleArrowRight size={23} />
      </button>
    </div>
  </div>
  )
}

export default Pagination