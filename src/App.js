import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { PropertyProvider } from "./contexts/PropertyContext";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Properties } from "./components/Properties/Properties";
import { CreateProperty } from "./components/CreateProperty/CreateProperty";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Footer } from "./components/Footer/Footer";
import { PropertyDetails } from "./components/PropertyDetails/PropertyDetails";
import { EditProperty } from "./components/EditProperty/EditProperty";

function App() {

    return (
        <AuthProvider>
            <PropertyProvider>
        <div id="box">
            <Header />
            <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Properties />}/>
                <Route path="/create" element={<CreateProperty />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/catalog/:propertyId" element={<PropertyDetails />} />
                <Route path="/catalog/:propertyId/edit" element={<EditProperty />} />
            </Routes>
            </main>
            <Footer />
        </div>
            </PropertyProvider>
        </AuthProvider>
    );
}

export default App;
