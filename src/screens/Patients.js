import {useContext, useEffect} from 'react';
import {Spinner, Table } from 'react-bootstrap';
import { PatientsContext } from '../contexts/PatientsContext';
import {FiEdit, FiDelete ,FiEye} from "react-icons/fi";


const Patients = () => {
    const {loading, patients ,getPatients} = useContext(PatientsContext)

    useEffect(() =>{
        getPatients();
        //eslint.disable.next-line
    },[]);

    return (
        <section>
            {loading && <Spinner animation="border"/>}
            {
                patients.length > 0 ?( 
                <Table striped hovered>
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>AGE</th>
                        <th>TIME</th>
                        <th>DATE</th>
                        <th>WEIGHT</th>
                        <th>CONTACT</th>
                        <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        patients.map((patients) =>(
                            <tr key={patients._id}>
                                <td>{patients.name}</td>
                                <td>{patients.genter}</td>
                                <td>{patients.age}</td>
                                <td>{patients.date}</td>
                                <td>{patients.weight}</td>
                                <td>{patients.contact}</td>
                                <td>{patients.email}</td>
                                <td>
                                <FiDelete /> <FiEdit /> <FiEye/> 
                                </td> 
                            </tr>
                        ))}
                        </tbody>
                    </Table>
    ):(
        !loading && <h1>NO RECORDS</h1>
    )
    };
        </section>
    );
};

export default Patients;
