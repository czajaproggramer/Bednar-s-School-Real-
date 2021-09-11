import './HomeWorkItem';
import HomeWorkItem from './HomeWorkItem';

function HomeWorks(props) {
    return (
        <div>
            {props.data.map(homework => <HomeWorkItem lesson={homework.lesson} description={homework.description} />)}
        </div>
    );
}

export default HomeWorks;