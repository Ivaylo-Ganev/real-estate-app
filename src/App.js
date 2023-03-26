import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Properties } from "./components/Properties/Properties";
import { CreateProperty } from "./components/CreateProperty/CreateProperty";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Footer } from "./components/Footer/Footer";
import { PropertyDetails } from "./components/PropertyDetails/PropertyDetails";
import { EditProperty } from "./components/EditProperty/EditProperty";
import { useEffect, useState } from "react";
import * as propertyService from "./services/propertyService";

function App() {
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        propertyService.getAll()
            .then(result => {
                setProperties(result);
            })
    }, []);

    const onSubmitHandler = async (data) => {
        const newProperty = await propertyService.create(data);

        setProperties(state => [{...state, newProperty}]);
        console.log(newProperty)
        navigate("/catalog");
    }

    return (
        <div id="box">
            <Header />
            <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Properties properties={properties}/>}/>
                <Route path="/create" element={<CreateProperty onSubmitHandler={onSubmitHandler}/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog/:propertyId" element={<PropertyDetails />} />
                <Route path="/catalog/:propertyId/edit" element={<EditProperty />} />
            </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
