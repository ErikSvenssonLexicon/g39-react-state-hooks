import Table from "./ui/Table";
import TableBody from "./ui/TableBody";
import TableHead from "./ui/TableHead";

const People = (props) =>{

    const content = props.people.map((person) => {
        return(
            <tr key={person.id} onClick={() => props.handleDeletePerson(person.id)}>
                <td>{person.fullName}</td>
                <td>{person.email}</td>
                <td>{person.birthDate}</td>
            </tr>
        )
    });

    return(
        <Table className="table table-hover">
            <TableHead headers={["Full name", "Email", "Birth Date"]}/>
            <TableBody>
                {content}
            </TableBody>
        </Table>
    )
}

export default People;