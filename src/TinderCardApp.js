import React, { useState } from "react"
import "./TinderCard.css"
import about_us_img2 from "./images/about_us_img2.jpg"
import about_us_img4 from "./images/about_us_img4.jpg"
import image_3 from "./images/image_3.png"
import image_4 from "./images/image_4.png"
import  image_5 from "./images/image_5.png"
import TinderCard from "react-tinder-card"

function TinderCardApp(){
    const [people, setPeople] = useState([
        {
            id:1,
            name:"Samuel",
            imgUrl:about_us_img2
        },
        {
            id:2,
            name:"Waweru",
            imgUrl:about_us_img4 
        },
        {
            id:3,
            name:"Mary",
            imgUrl:image_3
        }
        ,
        {
            id:4,
            name:"Joyce",
            imgUrl:image_4 
        }
        ,
        {
            id:5,
            name:"Kevin",
            imgUrl:image_5
        }
        ,
        {
            id:6,
            name:"Waweru",
            imgUrl:about_us_img4 
        },
        {
            id:7,
            name:"Mary",
            imgUrl:image_3
        }
        ,
        {
            id:8,
            name:"Joyce",
            imgUrl:image_4 
        }
        ,
        {
            id:9,
            name:"Kevin",
            imgUrl:image_5
        }


    ])
    return(
     <div className="tinderCard">
        <div className="tinderCard__item">
            {
                people.map((person)=>(
                   <TinderCard
                   key={person.id}
                   className="swipe"
                   preventSwipe={["up","down"]}
                   >
                    <div className="card" style={{backgroundImage:`url(${person.imgUrl})`}}>
                        <h4>{person.name}</h4>
                    </div>
                   </TinderCard>
                ))
            }
        </div>
     </div>
    )
}

export default TinderCardApp