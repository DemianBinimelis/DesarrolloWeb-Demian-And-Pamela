<?php
$Host = "localhost";
$Usser = "root";
$Pass = "";
$BD = "plant_oasis_proyect";

$Conexion = new mysqli($Host, $Usser, $Pass, $BD);

if ($Conexion->connect_error) {
    die("Conexión fallida: " . $Conexion->connect_error);
}

// Consulta a la base de datos
$sql = "SELECT Razon, Comentario, NombreUsser FROM comentarios";
$Res = $Conexion->query($sql);

$Comentarios = array();

// Crea un bucle mientras haya resultados en $Res y crea un array asignandole valores
if ($Res->num_rows > 0) {
    while ($row = $Res->fetch_assoc()) {
        $Comentarios[] = array(
            'Razon' => $row['Razon'],
            'NombreUsser' => $row['NombreUsser'],
            'Comentario' => $row['Comentario']
        );
    }
}

$Conexion->close();

// Devuelve los comentarios en formato JSON
header('Content-Type: application/json');
echo json_encode($Comentarios);
?>