<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function index(){
        return Product::all();
    }

    public function store(Request $request){
        $product = Product::create($request->all());
        return response()->json(["status"=> "success","product"=> $product]);
    }

    public function show($id){
        $product = Product::find($id);
        return response()->json(["status"=> "success","product"=> $product]);   
    }

    public function update(Request $request, $id){
        $product = Product::find($id);
        $product->update($request->all());
        return response()->json(["status"=> "success","product"=> $product]);

    }

    public function destroy($id){
        $product = Product::find($id);
        $product->delete();
        return response()->json(["status"=> "success",]);

    }

    
}
