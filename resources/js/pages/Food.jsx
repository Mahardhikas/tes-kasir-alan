import { Link } from "@inertiajs/react"
import React, { useState } from 'react';
import NewMenu from "./NewMenu"
import Navbar from "@/components/Navbar";


export default function Food(props) {
    console.log(props)
    return(
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div>
                <p className="text-gray-500 mt-[30px] ml-[70px]">tambahkan menu makanan yang ada di resto</p>
                <div className="bg-white border rounded shadow ml-[70px] mr-[70px]">
                    <Link href={'/new-menu'} className="ml-[30px]">
                        <button className="bg-blue-500 text-white px-4 py-2 mt-[30px]">+ Tambah Menu</button>
                    </Link>
                    <div className="bg-base-500 p-8">
                        <table className="table border">
                        <thead>
                            <tr className="bg-gray-300 text-center">
                                <th></th>
                                <th>Nama</th>
                                <th>Foto</th>
                                <th>Harga</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.menu.data.map((item) => (
                            <tr className={`text-center ${item.id % 2 !== 0 ? 'bg-gray-100' : ''} `} key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nama_menu}</td>
                                <td className="justify-center flex">
                                    <img src={`http://localhost:8000/storage/${item.gambar}`} className="w-[100px] h-[70px]" alt="{item.nama_menu}" />
                                </td>
                                <td>{item.harga}</td>
                            </tr>
                            ))}
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        </div>
    );
}