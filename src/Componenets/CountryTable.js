import React from 'react'
import { Table,Image } from 'semantic-ui-react'
function CountryTable({name,data}) {
  return (
    <div className='country_Table'>
       {data.length!==0 &&   <Table singleLine>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Counrty Name</Table.HeaderCell>
                <Table.HeaderCell>{name}</Table.HeaderCell>
                <Table.HeaderCell>Flag</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            {data && data.map((cot,idx)=>(
                <Table.Row id={idx} >
                <Table.Cell>{cot.country}</Table.Cell>
              {name==="Case Count" && <Table.Cell>{cot.cases}</Table.Cell>}
              {name==="Recovered Count" &&  <Table.Cell>{cot.recovered}</Table.Cell>}
              {name==="Death Count" && <Table.Cell>{cot.deaths}</Table.Cell>}

                <Table.Cell>            
                    <img style={{width:'20px',height:"20px"}} src={cot.countryInfo.flag}/>
                </Table.Cell>
                </Table.Row> 
              ))}
            </Table.Body>
          </Table>
        }
    </div>
  )
}

export default CountryTable