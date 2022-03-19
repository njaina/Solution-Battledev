/*
prenons un exemple de série
*/
let table = [10,5,3,3,4,9,9,9,9,9,6]
let object = [];

function count(table,object){
    
    for(let i=0; i<table.length-1; i++){
        for(let j=i+1; j<=i+1; j++){
            if(table[i] == table[j]){ // vérifie si la valeur de deux cartes consécutives sont égaux
                if(object.hasOwnProperty(table[i])){ // commence l'accumulation
                    object[table[i]] += 1;
                }
                else{
                    object[table[i]] = 2;
                }
            }
        }
    }
    let tableau = Object.entries(object); // met le nouveau tableau crée en objet (propriété , valeur)

    for(let i = 0; i<tableau.length; i++){
        for(let j = i+1; j<tableau.length; j++){
            if(tableau[j][1] > tableau[i][1]){
                let temp = tableau[j]
                    tableau[j] = tableau[i]
                    tableau[i] = temp // fait un triage croissant
            }
        }
    }
    //    console.log("La série la plus longue est :"+tableau[0][1]);
    //   console.log("Le numéro de carte est :"+tableau[0][0]);
}


count(table,object)
