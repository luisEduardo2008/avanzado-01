type Props ={
    numero : number;
    pinta : string;
    mostraCarta:(numero:number , pinta:string) => void;
};

function Carta({numero,pinta, mostraCarta}:Props) {
 const handCkick = () =>{
    mostraCarta(numero, pinta)
}
return(
    <button onClick={handCkick}>
       <h1>Hola soy una carta de {numero + " " + pinta}</h1>
    </button>
)
}
export default Carta;