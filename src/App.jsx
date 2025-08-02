import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import ClassBasedCounter from "../src/components/hook-basics/ClassBasedCounter"
import HookBasedCounter from "./components/hook-basics/HookBasedCounter.jsx";
import HookBasedCounterTwo from "./components/hook-basics/HookBasedCounterTwo.jsx";
import HookBasedForm from "./components/hook-basics/HookBasedForm.jsx";
import HookBasedCounterThree from "./components/hook-basics/HookBasedCounterThree.jsx";
import CounterOne from "./components/hook-basics/CounterOne.jsx";
import CounterTwo from "./components/hook-basics/CounterTwo.jsx";
import HookMouse from "./components/hook-basics/HookMouse.jsx";
import ParentComponent from "./components/UseCallBackHook/ParentComponent.jsx";
import use_Ref from "./components/useRefHook/Use_Ref.jsx";
import Use_Ref from "./components/useRefHook/Use_Ref.jsx";
import UseMemoHook from "./components/useMemoHook/UseMemoHook.jsx";
import SimpleForm from "./components/Form/SimpleForm.jsx";
import CompleteForm from "./components/Form/CompleteForm.jsx";
import ReactHookForm from "./components/Form/ReactHookForm.jsx";
function App() {


    return (
        <>
            {/*<ClassBasedCounter/>*/}
            <h1 className="text-yellow-400">loreum Ippsum</h1>
            {/*<ClassBasedCounter/>*/}
            {/*<HookBasedCounter/>*/}
            {/*<HookBasedCounterTwo/>*/}
            {/*<HookBasedForm/>*/}
            {/*<HookBasedCounterThree/>*/}
            {/*<CounterOne/>*/}
            {/*<CounterTwo/>*/}
            {/*<HookMouse/>*/}
            {/*<ParentComponent />*/}
            {/*<Use_Ref/>*/}
            {/*<UseMemoHook/>*/}
            {/*<SimpleForm/>*/}
            {/*<CompleteForm/>*/}
            <ReactHookForm/>

        </>
    )
}

export default App
