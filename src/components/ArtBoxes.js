import boxOne from '../assets/images/image-retro-pcs.jpg'
import boxTwo from '../assets/images/image-top-laptops.jpg'
import boxThree from '../assets/images/image-gaming-growth.jpg'
export const ArtBoxes = () => {
  return (
    <div className='boxes-Container'>
      <article>
        <img className='boxImage' src={boxOne} />
        <section>
          <h1 className='content-Info'>01</h1>
          <h2 className='content-Info'>Reviving Retro PCs</h2>
          <p className='content-Info'>What happens when old PCs are given modern upgrades?</p>
        </section>
      </article>
      <article>
        <img className='boxImage' src={boxTwo} />
        <section>
          <h1>02</h1>
          <h2>Top 10 Laptos of 2022</h2>
          <p>Our best picks for various needs and budgets</p>
        </section>
      </article>
      <article>
        <img className='boxImage' src={boxThree} />
        <section>
          <h1>03</h1>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunities</p>
        </section>
      </article>
    </div>
  )
}
