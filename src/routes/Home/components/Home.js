import React from "react";
import {View, Text} from "react-native";

import { Container } from "native-base";

import MapContainer from "./MapContainer";

class Home extends React.Component{

	componentDidMount(){
		this.props.getCurrentLocation();
	}
	render(){
		const region ={
			latitude:52.343595,
			longitude:4.898445,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		}
		return(
			<Container>
				{this.props.region.latitude &&
				<MapContainer 
					region={this.props.region} 
					getInputData={this.props.getInputData} 
					toggleSearchResultModal={this.props.toggleSearchResultModal}
					getAddressPredictions={this.props.getAddressPredictions}
					resultTypes={this.props.resultTypes}
				/>
				}
			</Container>
		);
		
	}
}

export default Home;