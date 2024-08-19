<?php

namespace App\Http\Controllers;

// use the personnel mode
use App\Models\Personnel;
use Illuminate\Http\Request;


//class PersonnelController
class PersonnelController extends Controller
{
    //define the methods
    public function index()
    {
        //display listing of the resource
        return Personnel::all();
    }

    public function store(Request $request)
    {
        //show form for creating new resource
        $personnel = Personnel::create($request->all());
        return response()->json($personnel, 201);
    }

    public function show($id)
    {
        //fetch by id
        return Personnel::find($id);
    }


    public function update(Request $request, $id)
    {
        //update by id
        $personnel = Personnel::findOrFail($id);
        $personnel->update($request->all());
        return response()->json($personnel, 200);
    }

    public function destroy($id)
    {
        Personnel::destroy($id);
        return response()->json(null, 204);
    }
}
