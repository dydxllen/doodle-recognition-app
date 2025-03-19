import { useEffect, useRef } from 'react';

function App() {
    const worker = useRef(null);

    useEffect(() => {
        if (!worker.current) {
            worker.current = new Worker(new URL('./worker.js', import.meta.url), {
                type: 'module'
            });
        }

        // Define callback function for messages from the worker
        const onMessageReceived = (e) => {
            console.log("Worker output:", e.data);
        };

        // Attach the callback function as an event listener
        worker.current.addEventListener('message', onMessageReceived);

        // Cleanup function
        return () => worker.current.removeEventListener('message', onMessageReceived);
    }, []);

    return (
        <div>
            <h1>Doodle Recognition App</h1>
            <p>Check the console for model output.</p>
        </div>
    );
}

export default App;
