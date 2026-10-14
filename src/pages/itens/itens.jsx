import styles from "./itens.module.css"

export const Itens = ({data, handleRemove}) =>{
    return (
        <>
            <div className={styles["container"]}>
                <h4>id: {data.id}</h4>
                <h3>User: {data.owner.login}</h3>
                <h4>Repo name: {data.name}</h4>
                <button onClick={() => handleRemove(data.id)}>Remover</button>
            </div>
        </>
    )
}