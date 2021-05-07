import {createContext, useReducer} from "react"
import patientsReducer from "../reducers/patientsReducer"
import axios from "axios"

const initialState = {
    loading: true,
    patients: [],
    error: null
}

export const PatientsContext = createContext()

const PatientsContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(patientsReducer,initialState)
    //get all trainees
    async function getPatients(){
        const res=await axios.get("https://trainees-api.herokuapp.com/api/v1/trainees")
        try{
            dispatch({
                type: "GET_ALL_PATIENTS",
                payload:res.data
            })
        } catch (error){
            console.log(error)
        }

    }
    return(
        <PatientsContext.Provider value={{getPatients, patients: state.patients}}>
            {children}
        </PatientsContext.Provider>
    )
}

export default PatientsContextProvider;