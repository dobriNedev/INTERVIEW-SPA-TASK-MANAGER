import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import { PersonsProvider } from './contexts/pesronsContext';

function App() {
    return (
        <PersonsProvider>
            <div className="App">
                <Header />
                <Dashboard />
            </div>
        </PersonsProvider>
    );
}

export default App;
