# React Native - Desafío de codificación
 
## Descripción de la prueba:

Se requiere crear una aplicación basada en ReactJS, React Hooks y Redux, que consta de
tres pantallas:

1. Inicio de sesión.
2. Registro.
3. Paginación

Listado de información con paginación.

Para implementar la lógica de la aplicación se deberá consumir los servicios de
https://reqres.in/.

En la pantalla de inicio de sesión es necesario usar Redux para mantener la sesión del
usuario. Así, en el momento en que el ingreso sea satisfactorio, el email del usuario deberá
guardarse en un estado con encriptación AES256.

En la pantalla de registro es necesario crear el usuario y si el proceso es satisfactorio, se
debe hacer el ingreso a la aplicación creando la sesión con los datos suministrados.

En la pantalla del listado de información con paginación, se deberá consumir el listado
de recursos y paginarlos mediante Redux. En esta pantalla deberá aparecer el email del
usuario des-encriptado mediante AES256 y se debe disponer de un botón para cerrar la
sesión.


## Levantamiento de la aplicación

Es necesario tener [node js]

Luego de clonar el repositorio es necesario instalar las dependencias del archivo package.json y node modules con 
```
[npm install]
```

Para inicializar la aplicación ejecute el comando:
```
[npx react-native run-android] 
```

