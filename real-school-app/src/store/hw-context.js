import React, {useState} from "react";
import axios from 'axios';

const HWContext = React.createContext({
    hwList: [],
    setHwList: () => {},
    deleteItem: (itemId) => {},
    editItem: (data) => {},
    addHwHandler: (data) => {}
});

export const HWContextProvider = (props) => {
    const [hwList, setHwList] = useState([]);

    const deleteItem = (itemId) => {
        axios({
            method: 'post',
            url: 'http://localhost/szkolna/deleteHomeWork.php',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Accept': 'text/html'},
            data: {
                homeWorkId: itemId
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        const newHW = hwList.filter((hw) => hw.id !== itemId)
        setHwList(newHW);
    };

    const editItem = (data) => {
        axios({
            method: 'post',
            url: 'http://localhost/szkolna/editHomeWork.php',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Accept': 'text/html'},
            data: {
                homeWorkId: data.id,
                subjectName: data.lesson,
                description: data.description
            }
        });

        const hwIndex = hwList.findIndex(hw => hw.id === data.id); //Bierzemy index w tablicy zedytowanej rzeczy
        const newHomeWorks = [...hwList]; //tworzymy kopię tablicy obiektów 'homeWorks'

        //W kopii tablicy zmieniamy w edytowanej pracy domowej dane na te już zedytowane
        newHomeWorks[hwIndex].lesson = data.lesson;
        newHomeWorks[hwIndex].description = data.description;
        if (data.date !== undefined) {
            newHomeWorks[hwIndex].lesson = data.lesson;
        }

        //Zmieniamy stan na kopię tablicy
        setHwList(newHomeWorks);
    };

    const addHwHandler = (data) => {
        axios({
            method: 'post',
            url: 'http://localhost/szkolna/addHomeWork.php',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Accept': 'text/html'},
            data: {
                userId: 1,
                subjectName: data.lesson,
                description: data.description,
                finalDate: data.date
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        
        setHwList(prevState => {
            return [data, ...prevState];
        });
    };

    return <HWContext.Provider value={{hwList: hwList, setHwList: setHwList, deleteItem: deleteItem, editItem: editItem, addHwHandler: addHwHandler}}>{props.children}</HWContext.Provider>;
};

export default HWContext;