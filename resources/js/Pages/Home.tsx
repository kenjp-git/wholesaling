import { ReactElement } from 'react';
import WholesalingLayout from "@/Layouts/WholesalingLayout";

const Home = function () {
    return (
        <div className="text-center">Wholesaling Home</div>
    )
}

Home.layout = (page: ReactElement) => {
    const pageName = page.props.translations.words.Home

    return (
        <WholesalingLayout
            pageName={pageName}
            children={page}
        />
    )
}
export default Home;