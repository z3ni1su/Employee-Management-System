import {Route , Routes} from "react-router-dom";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeDelete from "./EmployeeDelete";
import EmployeeDirectory from "./EmployeeDirectory";
import EmployeeWelcome from "./EmployeeWelcome";
import EmployeeEdit from "./EmployeeEdit";
import EmployeeRetire from "./EmployeeRetire";


function PageRoutes(){

    return(
        <Routes>
            <Route path='/create' element={<EmployeeCreate/>}></Route>
            <Route path='/' element={<EmployeeWelcome/>}></Route>
            <Route path='/directory' element={<EmployeeDirectory/>}></Route>
            <Route path='/delete/:id' element={<EmployeeDelete/>}></Route>
            <Route path='/edit/:id' element={<EmployeeEdit/>}></Route>
            <Route path='/retirement' element={<EmployeeRetire/>}></Route>
        </Routes>
    )
}

export default PageRoutes;