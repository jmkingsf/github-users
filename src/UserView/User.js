import React from 'react'

const useStateWithLocalStorage = localStorageKey => {
    const [visible, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || 'true'
    );
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, visible);
    }, [visible]);
   
    return [visible, setValue];
  };

function User(props)
{
    const [visible, setValue] = useStateWithLocalStorage(
        props.data.id
      );

    const onChange = event => setValue(event.target.checked ? 'true' : 'false');

    return (
        <div style={{background: "white", margin: "10px"}}>
            <h1 style={{color: "black"}}>{props.data.full_name}</h1>
            <input
            name="isGoing"
            type="checkbox"
            checked={visible === 'true'}
            onChange={onChange}
            />
        </div>
    )
}

export default User