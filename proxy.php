<?php
$url = 'http://www.onlinemeetingnow.com/register/?id=';

if ( isset($_GET['id']) )
{
    header('Content-Type: text/plain');
    echo file_get_contents($url . $_GET['id']);
    //print( file_get_contents($url . $_GET['id']) );

}
