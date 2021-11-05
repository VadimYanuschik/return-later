import Sidebar from './components/Sidebar/Sidebar.component';
import './fonts/fonts.css'
import {useEffect, useState} from 'react';
import axios from 'axios';
import ListItems from './components/ListItems/ListItems.component';

function App() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3001/lists',
            );
            setLists(result.data);
        };

        fetchData();
    }, []);
    return (
        <div className="App">
            <Sidebar lists={lists}/>
            <ListItems/>
        </div>
    );
}

export default App;
