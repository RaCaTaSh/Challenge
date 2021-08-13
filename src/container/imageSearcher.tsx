import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "../components/card/card";
import ShowButton from "../components/button/button";
import "./style.scss";

interface characterInterface{
  image:string;
  name:string;
  species:string;
  status:string;
  id:string
}
const ImageShearcher= ()  => {
  const [characters, setCharacters] = useState([]);
  const [show, setShow] = useState(false);
  
  const request = gql`
    query GET_FEMALE_CHARACTERS($gender: String) {
      characters(filter: { gender: $gender }) {
        results {
          id
          name
          species
          image
          status
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(request, {
    variables: { gender: "Female" },
  });
  useEffect(() => {
    if (data && !loading && !error) {
      setCharacters(data.characters.results);
      console.log("hola");
    }
  }, [data]);
  
  if (error) return <p>Error :(</p>;
  return (
    <div className="pageContainer">
      <div className="ShowButton">
      <ShowButton show={show} setShow={setShow}  />
      </div>
      <div className="Images">
      {show
        ? characters.map((item:characterInterface) => {
            return (
              <Card
                image={item.image}
                name={item.name}
                species={item.species}
                status={item.status}
                key={item.id}
              />
            );
          })
        : null}
      </div>
      
    </div>
  );
};
export default ImageShearcher;
