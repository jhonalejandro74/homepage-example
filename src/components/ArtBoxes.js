import boxOne from '../assets/images/image-retro-pcs.jpg'
import boxTwo from '../assets/images/image-top-laptops.jpg'
import boxThree from '../assets/images/image-gaming-growth.jpg'
export const ArtBoxes = (props) => {
  const { onMobile } = props
  const displayMobile = onMobile ? 'Mobile-' : ''
  return (
    <div className={displayMobile + 'boxes-Container'}>
      <article>
        <img className='boxImage' src={boxOne} />
        <section>
          <h1>01</h1>
          <a href='#'><h2 className='toOrangeHover'>Reviving Retro PCs</h2></a>
          <p className='content-Info'>What happens when old PCs are given modern upgrades?</p>
        </section>
      </article>
      <article>
        <img className='boxImage' src={boxTwo} />
        <section>
          <h1>02</h1>
          <a href='#'><h2 className='toOrangeHover'>Top 10 Laptos of 2022</h2></a>
          <p className='content-Info'>Our best picks for various needs and budgets</p>
        </section>
      </article>
      <article>
        <img className='boxImage' src={boxThree} />
        <section>
          <h1>03</h1>
          <a href='#'><h2 className='toOrangeHover'>The Growth of Gaming</h2></a>
          <p className='content-Info'>How the pandemic has sparked fresh opportunities</p>
        </section>
      </article>
    </div>
  )
}
