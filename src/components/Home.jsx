import React,{useContext,useEffect} from 'react'
import leetcodedata from '../state/context';
const Home = () => {
    const context = useContext(leetcodedata);
    const { getuserdata ,userdata} = context;
    useEffect(() => {
        getuserdata();
    })
    
  return (
    <>
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