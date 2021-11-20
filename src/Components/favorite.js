import React, { Component, useEffect } from 'react'

export default class Favorite extends Component {


	constructor() {
    super();

    this.state = {
      favorites: []
     
    }
  
  }



componentDidMount() {
    this.getFavorites();
  }

	
	   getFavorites = () => {


  var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
    	if(JSON.parse(localStorage.getItem(keys[i]))['liked'] === true){
values.push( localStorage.getItem(keys[i]));

}
        
    }





    this.setState({
        favorites: values


      });

};
     
    render() {

    

        return (



            <div>

            <h3>Favorites</h3><br />

 

           <h5> {this.state.favorites.map((favorite) => {
             return <div>Product name: {JSON.parse(favorite)['title']}<br /><br /></div>;

            })}</h5>

      
                
            </div>
        )
    }
}
