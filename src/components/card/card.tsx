import {FC } from "react";
import "./card.scss"
interface props {
  image: string;
  name:string;
  species:string;
  status:string
} 
const Card: FC<props> =({image,name,species,status})=>{
  return (
    <div className="card">
      <img src={image} alt="rick and morty image" />
      <p><strong> Name:</strong> {name}</p>
      <p><strong>Species:</strong> {species}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  )
}

export default Card