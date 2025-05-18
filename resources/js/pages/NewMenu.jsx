import Navbar from "@/components/Navbar"
import React, {useCallback, useState} from "react"
import { useDropzone } from "react-dropzone"
import { Inertia } from '@inertiajs/inertia'



export default function NewMenu(props) {
    const [nama, setNama] = useState('');
    const [gambar, setGambar] = useState(null);
    const [harga, setHarga] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        setGambar(acceptedFiles[0]);
        console.log(acceptedFiles);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept : {'image/*': []}})

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData()
            formData.append('nama', nama) 
            formData.append('gambar', gambar)
            formData.append('harga', harga)
        Inertia.post('/new-menu', formData)
    }

    console.log(props)
    return(
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="justify-center bg-white m-[70px] p-[30px]">
                <form onSubmit={handleSubmit}>
                    <p className="text-blue-500">Tambahkan Menu</p>
                    <div className=" mt-[30px]">
                        <p>Nama Menu</p>
                        <div className="justify-center flex">
                            <input type="text" placeholder="Type here" className="input w-full flex" onChange={(nama) => setNama(nama.target.value)}/>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <p>Foto Menu</p>
                        <div {...getRootProps()} className="border border-dashed p-[80px] border-gray-300 text-center bg-gray-100 cursor-pointer">
                            <input {...getInputProps()}/>
                            {
                                isDragActive ?
                                    <p>Drag and drop a file here or click</p>:
                                    <div>
                                        <div className="flex justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70px]"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#a9a7a7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </div>
                                        <p className="mt-2 text-gray-500">drag and drop a file here or click</p>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <p>Harga Menu</p>
                        <div className="grid grid-cols-13 bg-blue-600">
                            <p className="flex justify-center items-center text-white">Rp.</p>
                            <input type="text" className="col-start-2 col-end-13" onChange={(harga) => setHarga(harga.target.value)}/>
                        </div>
                    </div>
                    <div className="mt-[30px] justify-end flex ">
                        <button type="submit" className="border bg-green-500 text-white p-2 w-[200px]">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}