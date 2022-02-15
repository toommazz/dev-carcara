import Image from "next/image";
import styles from "./home-page.module.scss";
import profilePic from "../../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faThumbsUp,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => (
  <div className={styles.adiv}>
    <Image src={profilePic} alt="Picture of the author" />
    <h2 className={styles.h1}>Estude na Carcara!</h2>
    <p>
      A Cod3r se preocupa com o seu futuro e oferece os melhores cursos nas{" "}
      <br />
      principais tecnologias com excelência. Os nossos professores e métodos te{" "}
      <br />
      darão a base e os fundamentos para você aprender os porquês e trilhar os
      caminhos do sucesso.
    </p>
    <button className={styles.btn}>Nossos cursos</button>
    <button className={styles.btn2}>Plano de Assinatura</button>
    <body>
      <h1>Uma Escola de Excelência</h1>
      <li>
        <h3>Didática Comprovada </h3>
        <p>
          Mais de 250.000 alunos já passaram por aqui. Profissionais treinados e
          capacitados preparados para o mercado.
        </p>
      </li>
      <li>
        <h3>Time de Especialistas </h3>
        <p>
          A Cod3r conta com um time de programadores de altíssimo nível pra
          oferecer o melhor conteúdo.
        </p>
      </li>
      <li>
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ fontSize: 100, color: "blue" }}
        />
        <h3>Ensino com Excelência </h3>
        <p>
          Plataforma de alto padrão pra que você tenha a melhor experiência de
          aprendizado e atinja seus objetivos.
        </p>
      </li>
      <li>
        <i>
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ fontSize: 100, color: "blue" }}
          />
        </i>

        <h3>Suporte Dedicado </h3>
        <p>
          Conte com um time de suporte preparado pra tirar todas as suas dúvidas
          nas aulas.
        </p>
      </li>
      <li>
        <h3>Certificado de Conclusão </h3>
        <p>
          Todos os cursos dão direito a certificado com a carga horária estimada
          para conclusão
        </p>
      </li>
    </body>
  </div>
);

export default HomePage;
