# echo('Esto es una prática de git')

find . ! -type d -name .git -exec git 'init' {} \;
