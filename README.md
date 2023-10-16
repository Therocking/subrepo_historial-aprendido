# Practicando GIT
El archivo de configuración de git se llama **.gitconfig**, se encuentra, al menos el globla, en el diretorio 'principal'.

El flujo de trabajo de git es lineal, pero puede acabar teniendo ramificaciones. Una rama se crea con los cambios de un commit lo que significa que si en la rama principal(main) se realiza un nuevi commit las demás no tendran ese últimocambio.

![Ejemplo flujo trabajo git](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWIiU9tnZ3w0uJqo5OUpO_HIew-u4VEClag&usqp=CAU)

Los archivos se guardan en el directorio **.git**, que se encuentra en el directorio actual de trabajo.

## Commands

### Nombrar la primera rama por defecto
```GIT
git config --global init.defaultBranch {name}
```
Este comando se utiliza para que la rama que se crea al iniciar un proyecto tenga un nombre por defecto.

### Crear alias
```GIT
git config --global alias.{alias name{ {command}
```
Los alias se utilizan para llamar comandos pero con un nombre más corto:

```
git config --global alias.hacer_push "push origin main"
```

### Comparar

#### Commits
Para compara commits se utiliza el comando:

```GIT
git diff 
```
Muestra que ha cambiado desde el último commit, este comando támbien se puede utilizar para verificar que no allan conflictos entre rama:

```GIT
git diff {branch name}
```

### Navegar

#### Commits

Para moverse entre commits se utiliza el comando:
```GIT
git checkout {commit hash}
```
Antes de cambiar de commit es preferible hacer un commit del commit actual para no perder archivos.

Si se pierde algunos archivos se puede utilizar el comando:

``` GIT
git checkout -- .
```

Y se recuperan todos los archivos del último commit de la rama.

Con el:
```GIT
git reset --hard {commit hash}
```

Mueves el main al commit especificado en el comando y 'remueves' los commits luego especificado. ``NOTA``: los commits luego de que se le hacen el snapshot nunca se pierden o se borran, a menos que se especique que se quiere borrar.

```GIT
git reflog 
```
Muestra toda las acciones que se realizaron.

### Tags
Los tags se utilizan para 'resaltar' un commit.

#### Crear un tag

```GIT 
git tag {name-tag}
```

#### Moverse a un tag

```GIT
git checkout tags/{name-tag}
```
#### Ver los tags

```GIT
git tag
```

### Ramas

Las ramas se utilizan cuando se quiere hacer alguna funcionalidad independiente de la rama principal(main), para luego, si no hay errores, guardarla en la rama principal(main).

#### Crear rama

```GIT
git branch {name new branch}
```

#### Cambiar de rama

```GIT
git switch {branch name}
```

#### Unir ramas
Para unir ramas se utiliza el comando:

```GIT
git merge {branch name}
```

Al utilizar este comando se une la rama nombrada en la rama que se utilizó el commit, pero antes debe de crear un commit.

#### Conflicto de ramas
Este hace referencia al problema de traer archivos, realizar un merge, de otra rama y que estos estén modificados en la rama actual, si esto sucede git te preguntará con cuál versión del archivo te quieres quedar.

#### Eliminar ramas
El comando:

```GIT
git branch -d {branch name}
```

Elimina una rama, pero la referencia a los commits de esa rama siguen existiendo, nunca se pierden. Si se reemplaza el ``-d`` por el ``-D``, se borra de forma forsoza.

#### Guardado "temporal"
Si no se quiere realizar un commit pero se quiere guardar, de alguna forma lo que se has hecho, se puede utilizar el comando:

```GIT
git stash
```

Esto te permite cambios sin que afecte el flujo de trabajo(ramas o commits).

Para traer un stash se usa:

```GIT
git stash pop
```
Este trae todos los stash, y para visualizar los stash se usa:

```GIT
git stash list
```

Esto puede ser útil si se quiere mover, sin realizar cambios, a una rama, moverse por un commit, etc.

Para eliminar un stash se usa:

```GIT
git stash drop
```

Este elimina todos los stash.
