import { useState } from "react";

const TaskList = (props) => {
    const {Tasks, setTasks} = props;
    const [checkedItems, setCheckedItems] = useState([]);

    const onClickHandler =(e,index)=>{
        e.preventDefault();
        console.log(index)
        const updatedTasks = [...Tasks];
        updatedTasks.splice(index,1);
        setTasks(updatedTasks)
    }

    const onCheckboxChange =(index, ischecked) => {
        console.log(index);
        console.log(ischecked)
        setCheckedItems((prevCheckedItems) =>
        ischecked
                ? [...prevCheckedItems, index]
                : prevCheckedItems.filter((item) => item !== index)
        );
    }

    return (
        <>
        
            {Tasks.map((item,index) => {
                return (
                    <>
                    <div>
                        <div key={index} className={`tab ${
                            checkedItems.includes(index)
                                ? "strikethrough"
                                : "notStrikethrough"
                        }`}>{item.name} </div>
                        <input type="checkbox" onChange={(e) => onCheckboxChange(index, e.target.checked)}/>
                        <button onClick={(e)=>onClickHandler(e, index)}>Delete</button>
                    </div>
                    
                    </>
                )
            }) 
            }
        
        </>
    )
}
export default TaskList;