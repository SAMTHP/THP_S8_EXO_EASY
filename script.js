// ************** Afficher la valeur max **************
numbers = [1,2,3,4,5];

console.log("La valeur max est le chiffre : "+Math.max(...numbers)); // Affiche la valeur max de l'array numbers

// ************** Compter les voyelles d'un string **************

var sentence = "J'ai des voyelles en masse !" // Déclaration et affectation de la variable sentence

var i = 0;
var vowel = []; // Initialisation de l'array qui contiendra les voyelles


function countVowel(str){ // Création de la fonction counVowel()
	for(i = 0; i <= str.length; i++){
		var spliter = str.charAt(i) // Stock toutes les lettres contenues dans le string à l'index voulue
		if(spliter == "a" || spliter == "e" || spliter == "i" || spliter == "o" || spliter == "u"){
			vowel.push(spliter) // Stock toutes les voyelles si la dondition est remplie
		}
	}console.log("Le nombre de voyelles est : "+vowel.length);
}

countVowel(sentence); // Execution de la fonction avec initialisation de la variable sentence en tant que paramètre

// ************** Inverser les éléments du string **************

function ReverseStr(str){ // Création de la fonction qui inversera les caractères de la phrase
	console.log("Résultat de l'inversion : "+str.split('').reverse().join(''));
}

ReverseStr(sentence); // Execution de la fonction avec initialisation de la variable sentence en tant que paramètre
