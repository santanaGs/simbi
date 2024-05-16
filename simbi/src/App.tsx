// screen
import List from "./screens/List";
import All from "./screens/All";

// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({});
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
