




import List from "./List.jsx"
import { MainHeading,SecondHeading} from "./heading.jsx"
import CustomImage  from "./image.jsx"
import "./App.css"



const App=()=>{
  return (
    <div>
      <MainHeading></MainHeading>
      <SecondHeading></SecondHeading>
    <h1>
    Manoj kumar
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum sapiente et distinctio nisi eum doloremque quasi deserunt dolore asperiores perferendis magni, nemo officia, nulla ducimus? Mollitia illo accusantium in.</p>
     <ul>
     <li>apple</li>
     <li>mango</li>
     <li>banana</li>

     </ul>
     <table className="table">
      <tr>
        <td>data1</td>
        <td>data2</td>       
        <td>data3</td>
        <td>data4</td>
      </tr>
      <tr>
        <td>data1</td>
        <td>data2</td>       
        <td>data3</td>
        <td>data4</td>
      </tr>
      <tr>
        <td>data1</td>
        <td>data2</td>       
        <td>data3</td>
        <td>data4</td>
      </tr>
     </table>
    </div>
   
  )
}
export default App