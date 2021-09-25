import React, { useState, useContext } from 'react';

import './HomeWorkItem';
import HomeWorkItem from './HomeWorkItem';
import AddHomeWork from './AddHomeWork';
import Card from '../UI/Card';
import Button from '../UI/Button';
import HWContext from '../../store/hw-context';

function HomeWorks(props) {
    const ctx = useContext(HWContext);

    const [shouldWindowBeVisible, setShouldWindowBeVisible] = useState(false);

    const openHWWindow = () => {
        setShouldWindowBeVisible(true);
    };
    const closeWindow = () => {
        setShouldWindowBeVisible(false);
    };

    return (
        <Card className="column absolute">
            {shouldWindowBeVisible ? <AddHomeWork closeWindow={closeWindow} /> : null}
            {ctx.hwList.map(homework => <HomeWorkItem key={homework.id} id={homework.id} lesson={homework.lesson} description={homework.description} date={homework.date}/>)}
            <Button title="Stwórz pracę domową" clickHandle={openHWWindow}></Button>
        </Card>
    );
}

export default HomeWorks;