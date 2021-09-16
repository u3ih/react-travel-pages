import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img_9 from '../assets/images/img-9.jpg'
import img_2 from '../assets/images/img-2.jpg'
import img_3 from '../assets/images/img-3.jpg'
import img_7 from '../assets/images/img-7.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                    <ul className="cards__items">
                        <CardItem 
                            src={img_9}
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="Adventure"
                            path="/services"    
                        />
                        <CardItem 
                            src={img_2}
                            text="A British territory in the Atlantic Ocean, Bermuda features hidden coves, pink sand beaches"
                            label="Luxury"
                            path="/services"    
                        />
                        <CardItem 
                            src={img_3}
                            text="Composed of nine lush islands in the Atlantic, the Azores have grown in popularity over recent years."
                            label="Adventure"
                            path="/services"    
                        />
                        <CardItem 
                            src={img_7}
                            text="This popular honeymoon spot is more than a hideaway for amorous duos"
                            label="Luxury"
                            path="/services"    
                        />
                        <CardItem 
                            src={img_9}
                            text="Beach lovers can head to Nissi Beach to swim in its crystal-clear water, while history and architecture enthusiasts can admire the Hala Sultan Tekke mosque."
                            label="Adventure"
                            path="/services"    
                        />
                    </ul>
            </div>
        </div>
    )
}

export default Cards
