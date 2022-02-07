import Card from "./ui/Card";
import Table from "./ui/Table";
import TableBody from "./ui/TableBody";
import TableHead from "./ui/TableHead";

const People = (props) => {
  const content = props.people.map((person) => {
    return (
      <tr key={person.id} onClick={() => props.handleDeletePerson(person.id)}>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.birthDate}</td>
        <td>{person.age}</td>
      </tr>
    );
  });

  return (
    <Card className="mt-5 shadow">
      <Table className="table table-hover">
        <TableHead headers={["Full name", "Email", "Birth Date", "Age"]} />
        <TableBody>{content}</TableBody>
      </Table>
    </Card>
  );
};

export default People;
