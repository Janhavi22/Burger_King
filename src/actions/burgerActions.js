import axios from "axios"
export const getAllBurgers=()=>{

    dispatch({type:'GET_BURGERS_REQUEST'})

    try{
        const response = axios.get('/api/burgers/getburgers')
        console.log(response)
        dispatch({type:'GET_BURGERS_SUCCESS',payload :response.data})
    }catch(error){
        dispatch({type:'GET_BURGERS_FAILED',payload:error})
    }
}