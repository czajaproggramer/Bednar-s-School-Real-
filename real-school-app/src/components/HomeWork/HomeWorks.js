import React, { useState, useContext, useEffect } from 'react';

import './HomeWorkItem';
import HomeWorkItem from './HomeWorkItem';
import AddHomeWork from './AddHomeWork';
import Card from '../UI/Card';
import Button from '../UI/Button';
import HWContext from '../../store/hw-context';

let hwHeaders = new Headers();
hwHeaders.append('Accept', 'text/html');
hwHeaders.append('Access-Control-Allow-Origin', '*');

const hwInit = {
    method: 'GET',
    headers: hwHeaders,
    mode: 'cors',
    withCredentials: true,
  };
  
let hwRequest = new Request('http://127.0.0.1/szkolna/getHomeWorks.php');

function HomeWorks(props) {
    const ctx = useContext(HWContext);

    const [shouldWindowBeVisible, setShouldWindowBeVisible] = useState(false);

    const openHWWindow = () => {
        setShouldWindowBeVisible(true);
    };
    const closeWindow = () => {
        setShouldWindowBeVisible(false);
    };

    useEffect(() => {
        fetch(hwRequest, hwInit)
        .then(data => data.json())
        .then((result) => {
            let fetchedObjects = result.map(element => {
                const object = {
                id: element[0],
                lesson: element[2],
                description: element[1],
                date: element[3]
                }
                return object;
            })
            ctx.setHwList(prevState => {
                return fetchedObjects
            });
        });
    }, []);

    return (
        <Card className="column absolute">
            {shouldWindowBeVisible ? <AddHomeWork sbList={props.sbList} closeWindow={closeWindow} /> : null}
            {ctx.hwList.map(homework => <HomeWorkItem key={homework.id} id={homework.id} lesson={homework.lesson} description={homework.description} date={homework.date}/>)}
            <Button title="Stwórz pracę domową" clickHandle={openHWWindow}></Button>
        </Card>
    );
}

export default HomeWorks;