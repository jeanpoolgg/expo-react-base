
export const ObjectLiterals = () => {

    interface Person {
        age: number;
        firstName: string;
        lastName: string;
        address: Address;
    }

    interface Address {
        country: string;
        houseNo: string;
        streee?: string;
    }

    const person: Person = {
        age: 24,
        firstName: 'Jean Pool',
        lastName: 'Gutierrez',
        address: {
            country: 'Lima',
            houseNo: '615'
        },
    }


    return (
        <>
            <div>ObjectLiterals</div>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    )
}
