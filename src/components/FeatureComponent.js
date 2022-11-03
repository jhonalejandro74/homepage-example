// import mobileState from '../assets/images/image-web-3-mobile.jpg'
import desktopFeatureImg from '../assets/images/image-web-3-desktop.jpg'
import mobileFeatureImg from '../assets/images/image-web-3-mobile.jpg'
export const FeatureComponent = (props) => {
  const { onMobile } = props
  const displayMobile = onMobile ? 'Mobile-' : ''
  return (
    <>
      <div className={displayMobile + 'Features-container'}>
        <div className={displayMobile + 'info'}>
          <img className='imgFeature' src={onMobile ? mobileFeatureImg : desktopFeatureImg} />
          <div className={displayMobile + 'info-articles-container'}>
            <article>
              <h1 className='titleIntro'>The Bright Future of Web 3.0?</h1>
            </article>
            <article>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className='RmButton'>READ   MORE</button>
            </article>
          </div>

        </div>
        <div className={displayMobile + 'news-sections'}>
          <h1>New</h1>
          <article>
            <a href='#'><h2 className='toOrangeHover'>Hydrogen VS Electric Cars</h2></a>
            <p>Will hydrogen-fueled cars ever catch up
              to EVs?
            </p>
          </article>
          <hr />
          <article>
            <a href='#'><h2 className='toOrangeHover'>The Downsides of Al Artistry</h2></a>
            <p>What are the possible adverse effects of
              on-demand Al image generation?
            </p>
          </article>
          <hr />
          <article>
            <a href='#'><h2 className='toOrangeHover'>Is VC Funding Drying Up?</h2></a>
            <p>Private funding by VC firms is down 50%
              YOY. We take a look at what that means
            </p>
          </article>
        </div>
      </div>
    </>
  )
}
