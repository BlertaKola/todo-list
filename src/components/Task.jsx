
import { useState } from "react";


const Task = (props) => {
    const {Tasks, setTasks} = props;
    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            name
        }
        console.log(newTask)
        setTasks([...Tasks,newTask])
        setName("")
    }


    return (
        <>
        
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="">Task: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <input type="submit" value="Add Task" />

            </form>

        </>
    )
}
export default Task;