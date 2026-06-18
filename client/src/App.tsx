import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Problema from "./pages/Problema";
import Solucao from "./pages/Solucao";
import Tecnologia from "./pages/Tecnologia";
import Dashboard from "./pages/Dashboard";
import Impacto from "./pages/Impacto";
import Equipe from "./pages/Equipe";
import Contato from "./pages/Contato";
import Aquaponia from "./pages/Aquaponia";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/problema" component={Problema} />
      <Route path="/solucao" component={Solucao} />
      <Route path="/tecnologia" component={Tecnologia} />
      <Route path="/aquaponia" component={Aquaponia} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/impacto" component={Impacto} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/contato" component={Contato} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
