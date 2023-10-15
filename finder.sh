
echo "hola"

find . -type d -name .git -exec git 'log' {} \;
