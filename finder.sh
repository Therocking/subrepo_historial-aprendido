

find . -type d -name .git -exec git 'log' {} \;

read word
secretWord='algo'

case $word in
	$secretWord)
		echo -e "Esa es la palabra secreta"
		;;

	*)
		echo -e "No existe"
		;;
esac;
