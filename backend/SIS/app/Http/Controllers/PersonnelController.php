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
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'registration' => 'required|string',
            'idnumber' => 'required|string',
            'profile_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation
        ]);

        $data = $request->all();

        if ($request->hasFile('profile_picture')) {
            $image = $request->file('profile_picture');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/profile_pictures'), $imageName);
            $data['profile_picture'] = 'images/profile_pictures/' . $imageName;
        }

        $personnel = Personnel::create($data);
        return response()->json([
            'success' => true,
            'data' => $personnel
        ], 201);
        //return response()->json($personnel, 201);
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
