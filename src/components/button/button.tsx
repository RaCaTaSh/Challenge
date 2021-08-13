import { FC } from "react"
import "./button.scss"
interface props {
  show:boolean,
  setShow:React.Dispatch<React.SetStateAction<boolean>>;
}
const ShowButton: FC<props> =({show,setShow})=>{
  return(
    <>
    <button onClick={()=>setShow(!show)}>Show</button>
    <br />
    <img src="https://p4.wallpaperbetter.com/wallpaper/823/919/718/rick-and-morty-rick-sanchez-dont-panic-the-hitchhikers-guide-to-the-galaxy-morty-smith-cartoon-wallpaper-preview.jpg" className="logo" />
    </>
  )
}
export default ShowButton