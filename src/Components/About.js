import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

        	
<>
        	<div style={{ float: "left", width: "500px", height: '500px', paddingLeft: "120px"}}>


        	<br/>

            <p>They say peace is possible around the world, and children are the answer. At Generation Peace, we believe that adults can empower children to be the leading voice for change.

Nour Arida’s bond with her daughter Ayla and her upbringing caught the attention of millions around the world. This connection between the two inspired Nour to launch a kids clothing line, and have her daughter play a role in it.

Alongside childhood friend and reputed designer Rebecca Zaatar, Nour engages in conversations about the current state of the world, employing fashion to highlight freedom of expression, tolerance, equality and consciousness.

At its core, Generation Peace aims at being a bridge between kids’ tastes and parents’ concerns of practicality.

Our message is simple: To let go of our current world and reimagine it with those innocent young souls at the helm instead.

To reach out in love. To make a difference. This is our story.
</p>

            </div>





                <br/>
                <img variant="top" src={require(`./aboutImg.jpg`)?.default} style={{width: "500px", height: '500px'}} />
          

            </>
            
        )
    }
}
