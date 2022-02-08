import styles from "./home-page.module.scss";

const HomePage = () => (
  <div>
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
  </div>
);

export default HomePage;
