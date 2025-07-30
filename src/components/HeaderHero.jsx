
import LazyLoadingVideo from './ui/LazyLoadVideo'
import videoSectionDesktop from '../assets/vid/video-onePage-desktop.mp4'
import videoSectionMobile from '../assets/vid/video-onePage-mobile.mp4'
export const HeaderHero = () => {
  return (
    <section className="w-full text-white h-screen sm:h-screen overflow-hidden">
      <LazyLoadingVideo srcDesktop={videoSectionDesktop} srcMobile={videoSectionMobile} alt='video Section' />
    </section>
  )
}
