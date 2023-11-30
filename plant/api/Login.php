<?php
// CONEXION A BD
$Host = "localhost";
$Usser = "root";
$Pass = "";
$BD = "plant_oasis_proyect";

$Conexion = new mysqli($Host, $Usser, $Pass, $BD);

if ($Conexion->connect_error) {
    die("Error de conexión: " . $Conexion->connect_error);
}

// LOGIN
$Msj = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene los valores ingresados
    $NombreUsser = $_POST['NomUsser'];
    $Contra = $_POST['Contrasena'];

    // Busca que el usuario exista en la bd
    $Consulta = "SELECT * FROM usuarios
                WHERE NombreUsser = '$NombreUsser'
                AND Contrasena = '$Contra'";
    // Almacena la respuesta
    $Res = $Conexion->query($Consulta);

    // Indica el estado de la consulta
    if ($Res->num_rows == 1) {
        $Msj = "Sesion iniciada";
    } else {
        $Msj = "Los datos son incorrectos";
    }
}

// Muestra el estado
echo $Msj;

$Conexion -> close();
?>