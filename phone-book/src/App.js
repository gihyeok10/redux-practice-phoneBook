import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";  //모듈 가져와
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
// 1.왼쪽에는 연락처 폼, 오른쪽에는 검색 
// 2. 추가기능
// 3. 리스트에 아이템이 몇개 있는지 보임
// 4. 사용자가 유저를 이름검색으로 찾을수 있다.

function App() {
  return (
    <div>
        <h1 className="title">연락처</h1>
        <Container>
          <Row>
            <Col>
              <ContactForm/>
            </Col>

            <Col>
              <ContactList/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
