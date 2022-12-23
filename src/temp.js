// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : this,
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName());



// {/* <MyComponent message="&lt;3" /> */}

// {/* <MyComponent message={'<3'} /> */}


const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
};

const App = () => {
    return (
    <div>
        <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
        </Button>
    </div>
    );
};

function Item(props) {
    return <li>{props.message}</li>;
}

function TodoList() {
const todos = ['finish doc', 'submit pr', 'nag dan to review'];
return (
    <ul>
    {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
);
}