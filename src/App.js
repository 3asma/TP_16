import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import CompteList from "./components/CompteList";
import CreateCompte from "./components/CreateCompte";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-gray-800 mb-2">
                            🏦 Gestion Bancaire
                        </h1>
                        <p className="text-gray-600">
                            Application React avec GraphQL et Apollo Client
                        </p>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Comptes */}
                        <div className="space-y-6">
                            <CreateCompte />
                            <CompteList />
                        </div>

                        {/* Right Column - Transactions */}
                        <div className="space-y-6">
                            <TransactionForm />
                            <TransactionList />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center text-gray-600 text-sm">
                        <p>TP 16 - Projet React GraphQL Apollo Client</p>
                        <p className="mt-1">Développé par Imad ADAOUMOUM</p>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
