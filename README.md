# Practicando GIT
El archivo de configuración de git se llama **.gitconfig**, se encuentra, al menos el globla, en el diretorio 'principal'.

El flujo de trabajo de git es lineal, pero puede acabar teniendo ramificaciones. Una rama se crea con los cambios de un commit lo que significa que si en la rama principal(main) se realiza un nuevi commit las demás no tendran ese últimocambio.

![Ejemplo flujo trabajo git](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWIiU9tnZ3w0uJqo5OUpO_HIew-u4VEClag&usqp=CAU)

Los archivos se guardan en el directorio **.git**, que se encuentra en el directorio actual de trabajo.

## Commands

### Nombrar la primera rama por defecto
**git config --global init.defaultBranch {name}**, este comando se utiliza para que la rama que se crea al iniciar un proyecto tenga un nombre por defecto.

### Crear alias
**git config --global alias.{alias name} {command}**, los alias se utilizan para llamar comandos pero con un nombre más corto:

```
git config --global alias.hacer_push "push origin main"
```

### Comparar

#### Commits
Para compara commits se utiliza el comando **git diff**, muestra que ha cambiado desde el último commit.


### Navegar

#### Commits
Para moverse entre commits se utiliza el comando **git checkout {commit hash}**. Antes de cambiar de commit es preferible hacer un commit del commit actual para no perder archivos.

Si se pierde algunos archivos se puede utilizar el comando **git checkout -- .** y se recuperan todos los archivos delutimo commit de la rama.

Con el **git reset --hard {commit hash}** mueves el main al commit especificado en el comando y 'remueves' los commits luego especificado. ``NOTA``: los commits luego de que se le hacen el snapshot nunca se pierden o se borran, a menos que se especique que se quiere borrar.

**git reflog** muestra toda las acciones que se realizaron.

### Tags
Los tags se utilizan para 'resaltar' un commit.

### Crear un tag
- **git tag {name-tag}**

### Moverse a un tag
- **git checkout tags/{name-tag}**

### Ver los tags
- **git tag**

### Ramas

Las ramas se utilizan cuando se quiere hacer alguna funcionalidad independiente de la rama principal(main), para luego, si no hay errores, guardarla en la rama principal(main).

#### Crear rama
**git branch {name new branch}**

#### Cambiar de rama
**git switch {branch name}**

#### Unir ramas
Para unir ramas se utiliza el comando **git merge {branch name}**, al utilizar este comando se une la rama nombrada en la rama que se utilizó el commit, pero antes debe de crear un commit.

#### Conflicto de ramas
Este hace referencia al problema de traer archivos, realizar un merge, de otra rama y que estos estén modificados en la rama actual, si esto sucede git te preguntará con cuál versión del archivo te quieres quedar.
