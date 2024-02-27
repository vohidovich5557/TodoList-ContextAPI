import React from "react";
import { Appcontext } from "../../../context/app-context/app-context-provider";
import { FormDisplay } from "../card2";




export const Form = () => {

    const ref = React.useRef(null);

    const { data, dispatch } = React.useContext(Appcontext);

    console.log(data, dispatch);

    const submit = (e) => {
        e.preventDefault();

        dispatch(
            {
                type: "ADD",
                payload: { name: ref.current.value, id: Date.now() }
            }
        )
        ref.current.value = "";

    }


    return (
        <>
            <form onSubmit={submit} className=" w-[400px] h-[400px] border-2 flex flex-col items-center justify-center ml-auto mr-auto translate-y-[100px] rounded-[10px] shadow-lg">
                <input type="text" name="text" ref={ref} className="w-[300px] h-[50px] rounded-[10px] shadow-md outline-none text-md pl-[10px] focus:shadow-cyan-500/50 mb-[50px]" />
               <div className="w-[350px] h-[260px] overflow-scroll">
               <FormDisplay />
               </div>
            </form>
        </>
    )
}