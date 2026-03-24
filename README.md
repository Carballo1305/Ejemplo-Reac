🚀 FrontEnd
Desarrollado por: Aarón Alí Carballo Paredes Heroico en el free

📝 Descripción
EjemploReact es una API RESTful diseñada para gestionar la logística de un sistema de movilidad y comercio. Este backend permite administrar el registro de usuarios, catálogos de productos, categorías y flujos de carritos de compras, implementando un mapeo objeto-relacional (ORM) para asegurar la integridad de los datos.

🛠️ Stack Tecnológico
Lenguaje: JavaScript (Node.js)

Servidor: Express.js

Base de Datos: MySQL (vía XAMPP)

ORM: Sequelize

Gestión de Dependencias: NPM

⚙️ Configuración del Entorno
1. Clonar e Instalar
Bash
git clone https://github.com/tu-usuario/BackEnd-Panecitow.git
cd BackEnd-Panecitow
npm install
2. Base de Datos
Inicia MySQL desde el panel de XAMPP.

Crea una base de datos en phpMyAdmin llamada: db_panecitow.

(Opcional) El sistema está configurado para que Sequelize cree las tablas automáticamente al iniciar si no importas el archivo .sql.

3. Variables de Entorno (.env)
Crea un archivo .env en la raíz del proyecto con la siguiente configuración:

Fragmento de código
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=db_panecitow
DB_PORT=3306

PORT=3000
🚀 Ejecución
Para poner en marcha el servidor de desarrollo, ejecuta:

Bash
node app.js
El servidor estará disponible en: http://localhost:3000

📂 Estructura Principal
/models: Definición de tablas y relaciones de base de datos.

/routes: Puntos de entrada (endpoints) de la API.

/controllers: Lógica de negocio para cada funcionalidad.
