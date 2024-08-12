// const formatDate = (date: Date = new Date()) : string =>{
//     return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
// }
// export default formatDate;


const formatDate = (date: any = new Date()): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return "Date invalide"; // ou toute autre chaîne d'erreur
    }
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
export default formatDate;