<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('menus')->insert([
            'nama_menu' => 'nasi goreng',
            'harga' => 15000,
            'gambar' => 'nasi goreng.jpg',
            'total_harga' => 15000,
            'uang_pembeli' => 15000,
            'kembalian' => 0
        ]);
    }
}
