import { useRef, useState } from "react"
import PopUpPembayaran from "./PopUpPembayaran"

const PopUpCharge = ({pesanan, totalHarga}) => {
    const modalRef = useRef(null)
    const [uangPembeli, setUangPembeli] = useState(0)

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close()
        }
    }

    const kembalian = uangPembeli - totalHarga

    return(
        <div className="">
            <dialog id="my_modal_30" className="modal" ref={modalRef}>
                <div className="modal-box w-11/12 max-w-5xl  grid grid-5 gap-4 flex rounded-none">
                    <h3 className="font-bold text-lg col-start-1 col-end-7">Detail pesanan</h3>
                    <p className="py-4 col-start-1 col-end-4">
                        <div className="overflow-x-auto border border-base-content/5 bg-base-100">
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
                                <tr className={`${item.id % 2 !== 0 ? 'bg-gray-100' : ''}`}>
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
                    <div className="col-start-4 col-end-6 justify-center">
                        <p className="text-center">Uang Pembeli (Rp)</p>
                        <div className="grid grid-col-2">
                            <input type="number" name="" id="" className="flex justify-center" value={uangPembeli} onChange={ (e) => setUangPembeli(Number(e.target.value))}/>
                            <div className="grid grid-cols-7 mt-[20px]">
                                <button onClick={closeModal} className="border border-gray-400 col-start-1 col-end-4 text-gray-700">close</button>
                                <p></p>
                                <button className="bg-blue-700 col-start-5 col-end-8 text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>pay</button>
                                <PopUpPembayaran />
                            </div>
                        </div>
                        <p className="mt-[20px]">Kembalian: {kembalian >= 0 ? kembalian.toLocaleString() : ''} </p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default PopUpCharge