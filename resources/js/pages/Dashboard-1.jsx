import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FoodList from '@/components/Homepage/Foodlist';
import Order from '@/components/Homepage/Order';


export default function Dashboard1(props) {
        console.log(props)
        const [totalHarga, setTotalHarga] = useState(0);
        const [pesanan,setPesanan] = useState([])
    
        const handlePilihMenu = (item) => {
            const existingIndex = pesanan.findIndex(p => p.id === item.id);
            if (existingIndex !== -1) {
                const updatedPesanan = [...pesanan];
                updatedPesanan[existingIndex].qty += 1;
                setPesanan(updatedPesanan);
            }else{
                setPesanan([...pesanan, {...item, qty: 1}])
            }
            setTotalHarga(totalHarga + item.harga);
        };        
        
    
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-5 gap-4 m-[70px]">
                <FoodList menu={props.menu.data} handlePilihMenu={handlePilihMenu} />
                
                <Order menu={props.menu.data} handlePilihMenu={handlePilihMenu} pesanan={pesanan} totalHarga={totalHarga} setPesanan={setPesanan} setTotalHarga={setTotalHarga} />

            </div>
        </div>
    );
}
