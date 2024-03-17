import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div className='h-100vh'>
        <div className='h-80vh flex flex-col justify-center items-center'>
        <div className='p-4'> Github Followers : {data.followers}</div>
        <div className='p-4'><img className='rounded' src={data.avatar_url} width="350px" alt="" /></div>
        </div>
    </div>
  )
}

export default Github
export const gitapi = async ()=>{
    const response = await axios.get("https://api.github.com/users/Arslan6473")
    return response.data
 }