import GetPost from "./GetPost";
import GetPostBetterWay from "./GetPostBetterWay";
import GetPostUsingReducer from './GetPostUsingReducer';
export default function Khela() {
    return  (
        <>
           <div>
                <h3>Fetching Data Example with useState and useEffect</h3>
                <br/>
                <GetPost/>
           </div>
           <div>
                <h3>Fetching Data Example with useReducer and useEffect</h3>
                <br/>
                <GetPostUsingReducer/>
           </div>
           <div>
                <h3>Fetching Data Example with useReducer and useEffect Better Way</h3>
                <br/>
                <GetPostBetterWay/>
           </div>
        </>
    );
}