import React,{useContext,useEffect} from 'react'
import leetcodedata from '../state/context';
import Solved from './solved'
const Home = () => {
    const context = useContext(leetcodedata);
    const { getuserdata ,userdata} = context;
    useEffect(() => {
        // getuserdata();
    })
    
  return (
    <>
    <Solved/>
    <div className="details">
      username:{userdata.username}
    </div>
    <div className="submissions">
        submissions
    </div>
    </>
  )
}

export default Home