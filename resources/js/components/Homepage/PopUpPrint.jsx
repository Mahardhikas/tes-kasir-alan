import { useRef } from "react"

const PopUpPrint = ({pesanan, totalHarga}) => {
    const modalRef = useRef(null)
    return(
        <div>
             <div className="">
                <dialog id="my_modal_31" className="modal" ref={modalRef}>
                    <div className="modal-box w-11/12 max-w-5xl  grid grid-5 gap-4 flex">
                        <h3 className="font-bold text-lg col-start-1 col-end-7 justify-center flex">Detail pesanan</h3>
                        <p className="py-4 col-start-1 col-end-7">
                            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 justify-center flex">
                                <table className="table border">
                                    <thead>
                                    <tr className="bg-gray-300">
                                        <th></th>
                                        <th>Nama</th>
                                        <th>Foto</th>
                                        <th>Harga</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {pesanan.map((item, index) => (
                                        <tr>
                                        <th>{index + 1}</th>
                                        <td>{item.nama_menu} x{item.qty}</td>
                                        <td>
                                            <img src={`http://localhost:8000/storage/${item.gambar}`} className="w-[100px] h-[70px]" alt="" />
                                        </td>
                                        <td>{(item.harga * item.qty).toLocaleString()}</td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </p>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default PopUpPrint