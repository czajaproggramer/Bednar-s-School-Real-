import React, {useState} from "react";

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
        const newHW = hwList.filter((hw) => hw.id !== itemId)
        setHwList(newHW);
    };

    const editItem = (data) => {
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
        setHwList(prevState => {
            return [data, ...prevState];
        });
    };

    return <HWContext.Provider value={{hwList: hwList, setHwList: setHwList, deleteItem: deleteItem, editItem: editItem, addHwHandler: addHwHandler}}>{props.children}</HWContext.Provider>;
};

export default HWContext;