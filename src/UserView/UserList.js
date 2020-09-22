import React from 'react'
import User from './User'

export default class UserList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            users: [],
            pageSize: 10,
            pageNum: props.pageNum,
            total_count: null,
            isLoaded: null,
            error: null
        }
    }

    componentDidMount() {
        this.fetchUserList()
      }

    fetchUserList()
    {
        fetch(`https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=${this.state.pageNum}`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                users: result.items,
                total_count: result.total_count,
                isLoaded: true
            })
            },

            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
      }

    render() {
        const { error, isLoaded, users, total_count} = this.state
        if (isLoaded & !error)
        {
            return (
                <div>
                    <h1>total users: {total_count}</h1>
                    <ul>
                        {users.map(user => (
                            <User key={user.id} data={user}></User>
                        ))}
                    </ul>
                </div>
                
            )
        }

        return (
            <div>
                <h1>This is my userList</h1>
            </div>
        )
    }
}