function Expresiones(){
    const nombre="Aaron"
    const apellido="Carballo"
    return(
        <div>
        <h1>Expresiones</h1>
        <h3>Tu nombre es {nombre} y tu apellido es {apellido}</h3>
        </div>
    )
}
function Lista(){
    const users=[
        {id: 1, name: 'Aarón',role: 'Web Developer'},
        {id: 2, name: 'Juan',role: 'Movil Developer'},
        {id: 3, name: 'Pedro',role: 'Web Developer'},
        {id: 4, name: 'Maria',role: 'Movil Developer'},
        {id: 5, name: 'Luis',role: 'Web Developer'},
    ]
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Nombre</th>
                            <th>Role</th>
                        </tr>
                        <tr>
                            {
                              users.map(function(user){
                                return(
                                    <tr>key={index} 
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    </tr>
                                )
                              })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    
}
export default Expresiones
