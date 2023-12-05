import "../Activity/Activity.css"

export default function Activity({ id, name, onDeleteActivity }) {

    return <>
    <p>{name}</p>
    <button onClick={() => onDeleteActivity(id)}>x</button>
    </>
}