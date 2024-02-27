import React from "react";
import { Appcontext } from "../../../context/app-context/app-context-provider";


export const FormDisplay = () => {
    const { data, dispatch } = React.useContext(Appcontext);


    const deletItem = (id) => {
        dispatch({ type: "DELETE", payload: { id } });
    };

    const editItem = (id) => {
        const newText = prompt("", name);
        dispatch({ type: "EDIT", payload: { id, name: newText} })
    };

    return (
        <>
            {data.users?.map((item) => (
                <div key={item.id} className="flex items-center w-[350px] h-[50px] justify-between px-[20px] mb-[40px] rounded-[10px] shadow-md">
                    <h2 className="text-lg font-medium text-cyan-500">{item.name}</h2>
                    <div className="flex items-center gap-[10px]">
                        <button type="button" className="px-[10px] py-[5px] border-2 border-red-500/50 rounded-[10px] hover:border-red-500 text-red-500" onClick={() => deletItem(item.id)}>Delete</button>
                        <button type="button" className="px-[10px] py-[5px] border-2 border-green-500/50 rounded-[10px] hover:border-green-500 text-green-500" onClick={() => editItem(item.id)}>Edit</button>
                    </div>
                </div>
            ))}
        </>
    )
}