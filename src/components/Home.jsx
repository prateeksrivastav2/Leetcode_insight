import React,{useContext,useEffect} from 'react'
import leetcodedata from '../state/context';
const Home = () => {
    const context = useContext(leetcodedata);
    const { getuserdata } = context;
    useEffect(() => {
        getuserdata();
    })
    
  return (
    <>
    <div className="details">
        photo and details
    </div>
    <div className="submissions">
        submissions
    </div>
    </>
  )
}

export default Home