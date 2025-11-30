export default function Animals(props) {
    if (!props.animals) {
        return <div>Loading...</div>
    }

    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>
    }

    return (
        <ul>
            {props.animals.map(animal => <li key={animal}>{animal}</li>)}
        </ul>
    )
}


