const hello = () =>{
  return <h2> Welcome to react 19</h2>;
};
const Book= ()=>{
  return <>
  <h1 className = "text-2xl font-bold"> let's react </h1>
  <h2 className = "text-xl"> price : 699 </h2>
  <h3 className = "text-lg"> rating :4.5 </h3>
  </>
};



export default function App(){
  return (
     <>
   <h1 className = "text-4xl  text-center">
     Hello React
     </h1>
     <hello/>
     <Book/>
     </>
     );
}