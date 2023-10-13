# Practicando GIT
El archivo de configuración de git se llama **.gitconfig**, se encuentra, al menos el globla, en el diretorio 'principal'.

### Nombrar la primera rama por defecto
**git config --global init.defaultBranch <name>**, este comando se utiliza para que la rama que se crea al iniciar un proyecto tenga un nombre por defecto.

### Crear alias
**git config --global alias.<alias name> <command>**

### Comparar

#### Commits
Para compara commits se utiliza el comando **git diff**, muestra que ha cambiado desde el último commit.