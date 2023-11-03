import {useQuery} from "react-query";
import GetQoute from "./GetQuote";
export default function Quote(){
  // useQuery(cacheid,a fetcher  function that will return our response data)
   const {data} = useQuery("quote",() => GetQoute());
    return (
        <div>
            <h3>Fetching Data using React-Query</h3>
            <div>
                {data?.content}
            </div>
        </div>
    );
}