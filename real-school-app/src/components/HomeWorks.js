import './HomeWorkItem';
import HomeWorkItem from './HomeWorkItem';
import Card from './UI/Card';
import Button from './UI/Button';

function HomeWorks(props) {
    const deleteItem = itemKey => {
        props.deleteItem(itemKey);
    }
    const createNewHW = () => {
        console.log("Jest fajrant");
    }

    return (
        <Card className="centered column">
            {props.data.map(homework => <HomeWorkItem key={homework.id} id={homework.id} lesson={homework.lesson} description={homework.description} deleteYourself={deleteItem} />)}
            <Button title="Dodaj pracę domową" clickHandle={createNewHW}></Button>
        </Card>
    );
}

export default HomeWorks;