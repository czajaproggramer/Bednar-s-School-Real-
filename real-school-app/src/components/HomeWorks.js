import './HomeWorkItem';
import HomeWorkItem from './HomeWorkItem';

function HomeWorks(props) {
    const deleteItem = itemKey => {
        props.deleteItem(itemKey);
    }

    return (
        <div>
            {props.data.map(homework => <HomeWorkItem key={homework.id} id={homework.id} lesson={homework.lesson} description={homework.description} deleteYourself={deleteItem} />)}
        </div>
    );
}

export default HomeWorks;