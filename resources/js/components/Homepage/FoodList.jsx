const FoodList = ({menu, handlePilihMenu}) => {
    return(
        <div className="col-span-3">
            <div>
                <div className='flex flex-wrap gap-14'>
                    {menu.map((item) => (
                        <div key={item.id} className="border border-gray-300 w-48 h-60 cursor-pointer" onClick={() => handlePilihMenu(item)}>
                            <img
                                src={`http://localhost:8000/storage/${item.gambar}`}
                                alt={item.nama_menu}
                                className="w-full h-44 object-cover"
                            />
                            <h3 className="mt-2 font-semibold text-center">{item.nama_menu}</h3>
                            <p className="text-blue-700 text-center">Rp. {item.harga.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodList