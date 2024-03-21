import { useRef,useState } from "react";
import '../App.css'

export function Listing14() {
//    console.log('aaa')
    const elemRef = useRef();
    const [count, setCount] = useState(0);
    const count_ref = useRef(0);
    let test_count = 0;

    console.log('We have render ' + count)

    const showCount2 = () => {

        setCount((count)=>{return count + 1})
        test_count += 1;
        count_ref.current = test_count;

        console.log('count - ' + count)
//        console.log('count_ref - ' + count_ref.current)
        console.log('test_count - ' + test_count)

    };

    const startf = () => {
        elemRef.current.addEventListener("scroll",showCount2)
    };

    const endf = () => {
        setCount(test_count)
        elemRef.current.removeEventListener("scroll",showCount2)
//        setCount(count + 1)
//        setCount(count_ref.current)
    };

    return (
        <>
            <button onClick={startf}>Start look for scroll</button>
            <button onClick={endf}>End look for scroll</button>
            <em>{count}||{count_ref.current}||{test_count}</em>
            
            <div style={{height:300, backgroundColor:"red", 'overflowY': 'auto'}} ref={elemRef}>
                <div style={{height:1000, backgroundColor:"blue"}}>
                    test block
                </div>
            </div>
        </>
    );

}