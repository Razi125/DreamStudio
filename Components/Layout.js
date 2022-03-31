import React from 'react'
import Cardopportunities from './Cardopportunities/Cardopportunities'
import ExploreDream from './ExploreDream/ExploreDream'
import Footer from './Footer'
import Header from './Header'
import ImageContainer from './ImageContainer/ImageContainer'
import MainBG from './MainBG/MainBG'
import OurTeam from './OurTeam/OurTeam'
import SearchBar from './SearchBar/SearchBar'
import SocialMedia from './SocialMedia/SocialMedia'

const Layout = () => {
    return (
        <div className='bg-[#E5E5E5]'>
            <Header />
            <MainBG />
            <SearchBar />
            <ImageContainer />
            <ExploreDream />
            <Cardopportunities />
            <OurTeam />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Layout
