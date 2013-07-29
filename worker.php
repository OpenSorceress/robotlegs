<?php
/**
 *
 * @author: leah
 * @date: 7/29/13 9:44 AM
 *
 * @package: robotlegs
 */

trait Worker
{

	protected static $_instance;

	public function __construct()
	{

		if (!isset(self::$_instance)) {
			self::$_instance = new GearmanWorker();
		}
		return self::$_instance;
	}

}