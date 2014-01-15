<?php
 
use Illuminate\Database\Eloquent\Collection as BaseCollection;

class ComputerClassroomController extends BaseController {
  
  public function getIndex()
  {
    echo "Get the index";
  }

  public function postNew()
  {
    echo "Post New Record";
  }

  public function putUpdate()
  {
    echo "Put Update Record";
  }

  public function deleteDestroy()
  {
    echo "Delete Destroy Record";
  }

}
?>