// import mobileState from '../assets/images/image-web-3-mobile.jpg'
import desktopFeatureState from '../assets/images/image-web-3-desktop.jpg'
export const FeatureComponent = () => {
  return (
    <>
      <div className='Features-container'>
        <div className='info'>
          <img className='imgFeature' src={desktopFeatureState} />
          <div className='info-articles-container'>
            <article>
              <h1>The Bright Future of Web 3.0?</h1>
            </article>
            <article>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button>Read More</button>
            </article>
          </div>

        </div>
        <div className='news-sections'>
          <h1>New</h1>
          <article>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up
              to EVs?
            </p>
          </article>
          <hr />
          <article>
            <h2>The Downsides of Al Artistry</h2>
            <p>What are the possible adverse effects of
              on-demand Al image generation?
            </p>
          </article>
          <hr />
          <article>
            <h2>Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50%
              YOY. We take a look at what that means
            </p>
          </article>
        </div>
      </div>
    </>
  )
}
