import {Suspense} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Quote from "./Quote";
// QueryClient is a class used to create the client
export default function TopComp(){
    const client = new QueryClient({
        defaultOptions:{
            queries :{
                suspense:true,
            }
        }
    });
 
    return (
       <>
        <h1>**From TopComp**</h1>
           <QueryClientProvider client={client}>
             <Suspense fallback={<h3>Loading Fetching Data...</h3>}>
                <Quote/>
                <Quote/>
             </Suspense>
           </QueryClientProvider>
       </>
    );
}