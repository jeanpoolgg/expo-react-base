export const BasicTypes = () => {

    const name: string = 'Jean Pool';
    const age: number = 24;
    const isActive: boolean = false;

    const powers: string[] = ['React', 'Angular'];

    return (
        <>
            <h3>Tipos básicos</h3>
            {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
            <p>{powers.join(', ')}</p>
        </>
    );
}
