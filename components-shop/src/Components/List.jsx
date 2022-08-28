

export default function List(props) {


return (
    props.list.map((content) => {
        <li className={props.className}  > <a href="#"> {content}</a> </li>
    })
    
)
}