# Practicando GIT
El archivo de configuración de git se llama **.gitconfig**, se encuentra, al menos el globla, en el diretorio 'principal'.

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

Con el **git reset --hard {commit hash}** mueves el main al commit especificado en el comando y 'remueves' los commits luego especificado. ``NOTA``: los commits luego de que se le hacen el snapshot nunca se pierden o se borran, a menos que se especique que se quiere borrar.

**git reflog** muestra toda las acciones que se realizaron.

### Tags
Los tags se utilizan para 'resaltar' un commit.

### Crear un tag
**git tag {name-tag}**

### Moverse a un tag
**git checkout tag/{name-tag}**