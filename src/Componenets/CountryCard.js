import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import "./our.css"
function CountryCard({counrtyData}) {
  return (
    <div className='card__comp'>
      {counrtyData &&  <Card>
            <Image src={counrtyData.flag} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{counrtyData.country}</Card.Header>
            <Card.Description className='card__contenet_float_left'>
                Cases: {counrtyData.cases}
            </Card.Description>
            <Card.Description className='card__contenet_float_left'>
                Recovered: {counrtyData.recovered}
            </Card.Description>
            <Card.Description className='card__contenet_float_left'>
                Deaths: {counrtyData.deaths}
            </Card.Description>
            </Card.Content>
        </Card>
     }
    </div>
  )
}

export default CountryCard