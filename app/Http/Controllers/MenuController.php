<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuCollection;
use App\Models\menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menu = new MenuCollection(menu::paginate(20));
        return Inertia::render('Dashboard-1',[
            'title'=> 'Alan Resto',
            'description' => 'Selamat datang di Alan Resto',
            'menu' => $menu
        ]);
    }

    public function food() 
    {
        $menu = new MenuCollection(menu::paginate(20));
        return Inertia::render('Food', [
            'title' => 'Alan Resto',
            'menu' => $menu
        ]);
    }

    public function new()
    {
        $menu = new MenuCollection(menu::paginate(20));
        return Inertia::render('NewMenu', [
            'title' => 'Alan Resto',
            'menu' => $menu
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $menu = new menu();
    //     $menu->nama_menu = $request -> nama_menu;
    //     $menu->gambar = $request -> gambar;
    //     $menu->harga = $request -> harga;
    //     $menu->save();
    //     return redirect() -> back() -> with('message', 'menu makan baru telah ditambahkan');
    // }

    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'nama' => 'required|string',
            'harga' => 'required|numeric',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Simpan file gambar ke storage (misalnya: storage/app/public/menu)
        $path = $request->file('gambar')->store('menu', 'public'); // folder 'menu' di storage/public

        // Simpan data ke database
        $menu = new Menu();
        $menu->nama_menu = $validated['nama'];
        $menu->gambar = $path; // simpan path gambar
        $menu->harga = $validated['harga'];
        $menu->save();

        return redirect('/')->with('message', 'Menu makan baru telah ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(menu $menu)
    {
        //
    }

    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(menu $menu)
    {
        //
    }
}
