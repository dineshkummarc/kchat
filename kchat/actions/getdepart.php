<?php

/**
* KChat -
* Author Ganesh Kandu
* Contact kanduganesh@gmail.com 
*/

class getdepart extends action{
	
	function action($data){
		$dept = array();
				
		$stmt = $data['pdo']->prepare("SELECT * FROM `{$this->dbprefix}department`");
		$stmt->execute(array());
		while ($row = $stmt->fetch())
		{
			$dept[] = array(
				'id' => $row['id'],
				'dept' => $row['dept'],
				'discription' => $row['discription']
			);
		}
		return $dept;
	}
}