import { createRoot } from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
// import useState and AdoptedPetContext
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

// top of App function body


// wrap the rest of the app inside of BrowserRouter

import Pets from "./Pet";
import SearchParams from "./SearchParams";
import Details from './Details';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,//Cache as long  as user is i session
            cacheTime: Infinity,//Cache as long  as user is i session
        },
    },
});

const App = () => {
    const adoptedPet = useState(null);
    return (
        <BrowserRouter>
            <AdoptedPetContext.Provider value={adoptedPet}>;
                <QueryClientProvider client={queryClient}>
                    <header>
                        <Link to="/">
                            Adopt Me!
                        </Link>
                    </header>

                    <Routes>
                        <Route path="/details/:id" element={<Details />}></Route>
                        <Route path="/" element={<SearchParams />}></Route>
                    </Routes>
                </QueryClientProvider>
            </AdoptedPetContext.Provider>
        </BrowserRouter>
    )

}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
