import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ServiceCard from "../Components/ServiceCard";

const Home = () => {
    const {data: services=[]}=useQuery({
        queryKey:['services'],
        queryFn:async()=>{
            const res=await axios.get('services.json');
            localStorage.setItem('services',JSON.stringify(res.data));
            const services=JSON.parse(localStorage.getItem('services'));
            return services;
        }
    })
    return (
        <div>
            <h1 className="text-5xl text-center mb-10">Total services : {services.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    services.map(service=><ServiceCard key={service.service_id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;