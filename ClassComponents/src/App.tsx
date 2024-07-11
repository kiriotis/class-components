import { Component } from 'react';
import { ContainerComponent } from './components/ContainerCompanent/ContainerComponent';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
    render() {
        return (
            <div className="flex flex-col w-screen h-screen items-center gap-4">
                <ErrorBoundary>
                    <ContainerComponent />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
