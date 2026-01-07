import "./Home.scss"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"

export default function Home() {
  return (
    <main className="home">

      <section className="block block__one">
        <div className="container content__one">
          <h1>Scale productivity with Lumin AI</h1>
          <p>Enhance the speed and precision of your<br/>document wirkflows with scalable AI.</p>
          <div className="image">
            <img src={icon1} alt="Anh1" className="img-icon"/>
            <img src={icon2} alt="Anh2" className="img-icon"/>
            <img src={icon3} alt="Anh3" className="img-icon"/>
          </div>

          <button className="btn btn--primary">
            Request a pilot
          </button>
        </div>
      </section>

      <section className="block block__two">
        <div className="container">
          <h1>a</h1>
        </div>
      </section>

      <section className="block block__three">
        <div className="container">
          <h2>About</h2>
        </div>
      </section>

    </main>
  )
}
