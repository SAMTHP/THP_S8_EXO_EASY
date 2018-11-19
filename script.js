var sentence = "J'ai des voyelles en masse !" // Déclaration et affectation de la variable sentence

var i = 0;
var vowel = []; // Initialisation de l'array qui contiendra les voyelles


function countVowel(str){ // Création de la fonction counVowel()
	for(i = 0; i <= str.length; i++){
		var spliter = str.charAt(i) // Stock toutes les lettres contenues dans le string à l'index voulue
		if(spliter == "a" || spliter == "e" || spliter == "i" || spliter == "o" || spliter == "u"){
			vowel.push(spliter) // Stock toutes les voyelles si la dondition est remplie
		}
	}console.log("Le nombre de voyelles est : "+vowel.length)+".";
}

countVowel(sentence); // Execution de la fonction avec initialisation de la variable sentence en tant que paramètre

function ReverseStr(str){ // Création de la fonction qui inversera les caractères de la phrase
	console.log(str.split('').reverse().join(''));
}

ReverseStr(sentence); // Execution de la fonction avec initialisation de la variable sentence en tant que paramètre
