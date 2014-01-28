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
  return View::make('room')->nest('contentTabHolder','classroomTab');
});

Route::get('roomschedule/computerclassroom', function()
{
  return View::make('room')->nest('contentTabHolder','computerclassroomTab');
});

Route::get('roomschedule/breakoutroom', function()
{
  return View::make('room')->nest('contentTabHolder','breakoutroomTab');
});

Route::get('roomschedule/specialroom', function()
{
  return View::make('room')->nest('contentTabHolder','specialroomTab');
});