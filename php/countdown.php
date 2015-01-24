<?php

if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds)
{
	if ($seconds>=0)
	{
		echo $seconds."<br>";	
		countdown(--$seconds);
	}else 
	{
		return;
	}	
}

countdown(10);

die('0 All done...');