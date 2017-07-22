import update from "react-addons-update";
import constants from "./actionConstants";


//-----------------------------
// Constants
//-----------------------------
const { GET_CURRENT_LOCATION } = constants;

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
			$set:action.payload
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