import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const Print = ({pesanan, totalHarga}) => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    return(
        <div className='flex col-start-3 col-end-5'>
            <button onClick={reactToPrintFn} className='w-full text-white bg-green-500 px-4 py-2 rounded'>Print Bill</button>
            <div ref={contentRef} className="hidden print:block">
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
                    <div className="font-bold text-center mt-2">
                        Total: Rp {totalHarga.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Print


