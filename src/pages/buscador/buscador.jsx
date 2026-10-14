import styles from './buscador.module.css'
import {useState} from "react";
import {api} from "../../services/api"
import {Itens} from "../itens/itens";

export const Buscador = () =>{
    const [currentRepo, setCurrentRepo] = useState("")
    const [repos, setRepos] = useState([])
    async function handleRepos(){

        try {
            const {data} = await api.get(`/repos/rochamariza/${currentRepo}`)
            const exist = repos.find(achado => achado.id === data.id)
            if(!exist){
                if(data.id){
                    setRepos(prev => [...prev, data])
                    setCurrentRepo("")
                }
            }

        }catch (error){
            alert("erro ", error)
        }
    }
    function handleRemove(id){
        setRepos(prev => prev.filter(repo => repo.id !== id))
    }
    return (
        <>
            <div className={styles["container"]}>
                <h2>Wiki de Repositórios</h2>
                <div className={styles["container-input"]}>
                    <input className={styles["buscador-input"]} onChange={(e) => setCurrentRepo(e.target.value)} value={currentRepo}/>
                    <input type="button" value="Buscar" className={styles["buscador-btn"]} onClick={handleRepos}/>
                </div>
                <div className={styles["itens"]}>
                    {repos.map((rep) => (
                        <Itens data={rep} handleRemove={handleRemove}/>
                    ))}
                </div>
            </div>
        </>
    )
}