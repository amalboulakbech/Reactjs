import "./App.css";
import { Button, Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Démystifiez les notion-clés du JS</h1>
        <p>
          Gagnez en confiance en seulement 7 jours grâce à ce cours décryptant
          l'exécution de votre code JavaScript.
        </p>
      </header>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ul className="list">
        <li>Réduisez le syndrome de l'imposteur </li>
        <li>Créer des compétences -quiz a la fin de chaque journée </li>
        <li>Aprenez rapidement - 10 min de vedios par jour </li>
      </ul>
    </div>
  );
}

export default App;
