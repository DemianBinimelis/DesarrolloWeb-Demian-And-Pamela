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

// REGISTER
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene los valores ingresados por el usuario
    $NombreUsser = $_POST["NombreUsser"];
    $Nombre = $_POST["NombreC"];
    $Rut = $_POST["Rut"];
    $Contra = $_POST["Contrasena"];
    $Direccion = $_POST["Direccion"];
    $Email = $_POST["Email"];

    // Verifica que el nombre de usuario no este en uso
    $Consulta = "SELECT NombreUsser FROM usuarios WHERE NombreUsser = ?";
    $stmt = $Conexion->prepare($Consulta);
    $stmt->bind_param("s", $NombreUsser);
    $stmt->execute();
    $stmt->store_result();

    // Si esta en uso manda un mensaje avisando
    if ($stmt->num_rows > 0) {
        echo "Nombre de usuario ocupado, Intenta uno nuevo";
    } else {
        // En caso contrario registra al usuario en la bd
        $Agregar = "INSERT INTO usuarios(NombreUsser, NombreC, Rut, Contrasena, Direccion, Correo) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $Conexion->prepare($Agregar);
        $stmt->bind_param("ssssss", $NombreUsser, $Nombre, $Rut, $Contra, $Direccion, $Email);

        // Indica el estado del registro
        if ($stmt->execute()) {
            echo "Se ha registrado con exito";
        } else {
            echo "Error en el registro";
        }
    }

    $stmt->close();
    $Conexion->close();
}
?>