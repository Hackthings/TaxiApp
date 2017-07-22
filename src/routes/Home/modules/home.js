import update from "react-addons-update";
import constants from "./actionConstants";
import { Dimensions } from "react-native";


//-----------------------------
// Constants
//-----------------------------
const { GET_CURRENT_LOCATION } = constants;

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.00421;

const ASPECT_RATIO = width / height;

//-----------------------------
// Actions
//-----------------------------
export function getCurrentLocation(){
	return(dispatch)=>{
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload: position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
	}
}

//-----------------------------
// Action Handlers
//-----------------------------
function handleGetCurrentLocation(state, action){
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
		}
	})
}
const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION:handleGetCurrentLocation
}
const initialState = {};

export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];
	
	return handler ? handler(state, action) : state;
}