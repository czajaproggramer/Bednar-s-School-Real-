import React, { useState } from 'react';

import './HomeWorkItem';
import HomeWorkItem from './HomeWorkItem';
import AddHomeWork from './AddHomeWork';
import Card from '../UI/Card';
import Button from '../UI/Button';

function HomeWorks(props) {
    const [shouldWindowBeVisible, setShouldWindowBeVisible] = useState(false);

    const deleteItem = itemKey => {
        props.deleteItem(itemKey);
    };
    const openHWWindow = () => {
        setShouldWindowBeVisible(true);
    };
    const closeWindow = () => {
        setShouldWindowBeVisible(false);
    };
    const getHWData = data => {
        const dataWithID = {
            ...data,
            id: Math.random().toString()
        }
        props.passData(dataWithID);

        setShouldWindowBeVisible(false);
    };
    const passEdit = data => {
        props.passEdit(data);
    };

    return (
        <Card className="column absolute">
            {shouldWindowBeVisible ? <AddHomeWork passHWData={getHWData} closeWindow={closeWindow} /> : null}
            {props.data.map(homework => <HomeWorkItem key={homework.id} id={homework.id} lesson={homework.lesson} description={homework.description} date={homework.data} deleteYourself={deleteItem} passEdit={passEdit} />)}
            <Button title="Stwórz pracę domową" clickHandle={openHWWindow}></Button>
        </Card>
    );
}

export default HomeWorks;