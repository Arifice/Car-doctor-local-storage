import { useQuery } from "@tanstack/react-query";
import { deleteCart, getCartData, updateCart } from "../localStorage";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const { data: cartItems = [], refetch } = useQuery({
        queryKey: ['cartItems'],
        queryFn: async () => {
            const data = await getCartData();
            return data;
        }

    })
    const myItems = cartItems.filter(item => item?.userEmail === user?.email);
    const handleDelete = (id) => {
        console.log({ id });
        deleteCart(id);
        refetch();
        Swal.fire({
            icon: 'success',
            title: 'Yes.....',
            text: `You have successfully deleted  this item`,
            timer: 1000,
        })
    }
    const handleConfirm = (id) => {
        console.log({ id });
        updateCart(id);
        refetch();
        Swal.fire({
            icon: 'success',
            title: 'Yes.....',
            text: `You have successfully confirmed  this item`,
            timer: 1000,
        })
    }
    return (
        <div>
            <h1 className="text-5xl text-center">Total Items : {myItems.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl font-bold text-center">
                            <th>SL</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>User Email</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map((item, idx) => <tr key={idx}>
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    <img className="h-20 w-32 rounded-lg" src={item.img} alt="Avatar Tailwind CSS Component" />
                                </td>
                                <td className="text-2xl font-semibold">
                                    {item.title}
                                </td>
                                <td className="text-2xl font-semibold">
                                    {item.userEmail}
                                </td>
                                <td className="text-justify">{item.description.slice(0, 200)}</td>
                                <td>
                                    {
                                        item?.status ? <span className="text-green-500">{item.status}</span> : <button onClick={() => handleConfirm(item.service_id)} className="btn btn-secondary ">Confirm</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.service_id)} className="btn btn-warning btn-circle ">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;