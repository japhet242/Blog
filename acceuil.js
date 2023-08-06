const date_publicationG=document.querySelectorAll('.a_la_une .date_publication')
for(let date_publication of date_publicationG){
//ajout d'une date dynamique 
let mois = 1
const date_publi = new Date(2023,6,25)
const c_date = Math.round((new Date().getTime() - date_publi.getTime()) / 3600000)
if (c_date < 24) {
    date_publication.append(` il y'a ${c_date}h`)
}else if (c_date>=24 && c_date<744) {
    const c_date_jour = Math.round((new Date().getTime() - date_publi.getTime()) /86400000)
  date_publication.append(` il y'a  environ ${c_date_jour}j`)
}else{
    const c_date_mois = Math.round((new Date().getTime() - date_publi.getTime()) /2678400000)
  date_publication.append(` il y'a  environ ${c_date_mois}mois`)
} 
} 
//console.log(Math.round(h))
