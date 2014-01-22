<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('roomschedule/classroom', function()
{
  //return View::make('pages.classroom');
  //return View::make('classroom');
  return View::make('classroom')->nest('classroomTabHolder','classroomTab');
});

Route::get('roomschedule/computerclassroom', function()
{
  //return View::make('pages.computerclassroom');
  return View::make('computerclassroom')->nest('computerclassroomTabHolder','computerclassroomTab');
});

Route::get('roomschedule/breakoutroom', function()
{
  //return View::make('pages.breakoutroom');
  return View::make('breakoutroom')->nest('breakoutroomTabHolder','breakoutroomTab');
});

Route::get('roomschedule/specialroom', function()
{
  //return View::make('pages.specialroom');
  return View::make('specialroom')->nest('specialroomTabHolder','specialroomTab');
});

Route::controller('roomschedule/data/classroom','ClassroomController');
Route::controller('roomschedule/data/computerclassroom','ComputerClassroomController');
Route::controller('roomschedule/data/breakoutroom','BreakoutRoomController');
Route::controller('roomschedule/data/specialroom','SpecialRoomController');