import message from "./Message.js";

const names=["James","Rowen","Jessie","Tims","Maki","Eunice","Mark"];
const nameList=names.map((item)=><li>{item}</li>);
const greetings=<h1>{message}</h1>;
const vehicles=["mustang","F-150","expedition"];
const [car,truck,suv]=vehicles;
const[boy1,boy2,boy3,,boy4,,boy5]=names;
const[,,,girl1,,girl2]=names;


const apple={
  color:"red",
  shape:"round",
  quantity:10,
}
const greenApple={
  color:"green",
  price:25,
}
let {color:appleColor,shape:appleShape}=apple;
let setOfNumber1=[23,34,56,44,5,8,11,43];
let setOfNumber2=[23,34,56,44,5,8,11,43];
let combineNumbers=[...setOfNumber1,...setOfNumber2].map((number)=><div>{number}</div>);
let [first,second,...rest]=setOfNumber1;
let fruitData={...apple,...greenApple};
function MainContent(){
return(
<div>
       <div className="banner">{greetings}</div>
       <section>   
        <ul>
        {nameList}
         {names.map((item)=><li>{item}</li>)}
       </ul>
        <p>{car},{truck},{suv}</p>
        </section>
   <div className="row">
        <div className="col-sm-6">
        <p>{boy1},{boy2},{boy3},{boy4},{boy5}</p>
        <p>{girl1},{girl2}</p>
        <p>{appleColor},{appleShape}</p>
        <p>{combineNumbers}</p>
        </div>
        <div className="col-sm-6">
        <p>{first}</p>
        <p>{second}</p>
        <p>{rest}</p>
        <p>{fruitData.color},{fruitData.quantity},{fruitData.price},{fruitData.shape}</p>
        </div>
   </div>
</div>
    );
}
export default MainContent;