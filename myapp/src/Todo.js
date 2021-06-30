import { useEffect, useState } from "react"


const Todo = () => {
    const [data, dataUpdate] = useState([])
    const [page, pageUpdate] = useState(1)
    const [totalPages, totalPageUpdate] = useState(5)

    useEffect(() => {
        const url = `https://reqres.in/api/users?page=${page}`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dataUpdate(res.data)
                totalPageUpdate(res.data.total_pages)
            })
            .catch(err => {
                console.log(err)
            })
    }, [page])

    const getPagination = () => {
        const content = []
        for (let i = 0; i < 2; i++) {
            content.push(i + 1)
        }
        return content
    }
    return (
        <>
        <div style={{ display : 'flex' , flexWrap : 'wrap'}}> {data.length > 0 &&
            data.map((item, index) => {
                return (
                    <div key={Math.random()}>
                        <p>{item?.first_name} </p>
                        <p>{item?.last_name} </p>
                        <p> {item?.email} </p>
                        <p> {item?.id} </p>
                        <img src={item.avatar} alt="img" />
                    </div>
                )
            })}
           
        </div>
         <div>
         {getPagination().map((item) => {
             return (
                 <span  style={{
                     width : '50px' ,
                     backgroundColor : 'red'
                 }}
                 onClick={() => {
                     pageUpdate(item)
                 }} > {item} </span>
             )
         })}
     </div>
     </>
    )
}

export default Todo