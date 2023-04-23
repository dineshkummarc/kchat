<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use KChat\ActivityLog;

class SettingController extends Controller
{
	
    function Setting(Request $request){
        
		if($request->role != 'admin'){
			return false;
        }
        
		$TimeZone = \DateTimeZone::listIdentifiers();
        
		$departments = DB::table('departments')->get();
        
        return view('admin.settings',compact('departments','TimeZone'));
	}
	
    function TimeZone(Request $request){
        
		if($request->role != 'admin'){
			return false;
        }
        
		\Settings::set('Timezone',$request->timezone);
		ActivityLog::log()->save('Timezone','You have successfully updated Timezone to  '.$request->timezone);
	}
	
    function AddDepartment(Request $request){
        
		if($request->role != 'admin'){
			return false;
        }
		
		DB::table('departments')->insert(
			['department' => $request->adddepartment]
		);
		
		ActivityLog::log()->save('Setting','You have successfully Added '.$request->adddepartment.' Department.');
		
	}
	
    function DeleteDepartment(Request $request){
        
		if($request->role != 'admin'){
			return false;
        }
		
		DB::table('departments')->where('department', $request->deletedepartment)->delete();
		
		ActivityLog::log()->save('Setting','You have successfully Deleted '.$request->deletedepartment.' Department.');
	}
	
}