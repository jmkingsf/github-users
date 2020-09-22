import React, {useReducer} from 'react';
import UserList from './UserList';

const useStateWithLocalStorage = localStorageKey => {
    const [pageNum, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || 1
    );
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, pageNum);
    }, [pageNum]);
   
    return [pageNum, setValue];
  };

function UserView() {
    const [pageNum, setValue] = useStateWithLocalStorage(
        "pageNum"
      );

    const onChange = event => setValue(event.target.value);
    const increment = () => setValue(parseInt(pageNum) + 1);
    const decrement = () => setValue(parseInt(pageNum) - 1);
    // const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>this is my user view</h1>
            <button onClick={increment}>next</button>
            <button onClick={decrement}>previous</button>
            <input
                type="text"
                value={pageNum}
                onChange={onChange}
                ></input>
            <UserList pageNum={pageNum}></UserList>
        </div>
    )
}

export default UserView