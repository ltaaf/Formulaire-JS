
function valider(form){

    //Récuperation des données saisies dans des 
   let nom = document.getElementById("nom");
   let mails = document.getElementById("mails");
   let notes = document.getElementById("notes");
   let list = document.getElementById("list");
   let textes = document.getElementById("textes");


   let pa_nom = document.getElementById("p_nom");
   let pa_mails = document.getElementById("p_mails");
   let pa_notes = document.getElementById("p_notes");
   let pa_list = document.getElementById("p_list");
   let pa_textes = document.getElementById("p_textes");


//   Affichages des données récuperer dans les paragraphes
   pa_nom.innerHTML = nom.value;
   pa_mails.innerHTML = mails.value;
   pa_notes.innerHTML = notes.value;
   pa_list.innerHTML = list.value;
   pa_textes.innerHTML = textes.value;
   
   }

