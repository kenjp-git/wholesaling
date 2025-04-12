import WholesalingLayout from "@/Layouts/WholesalingLayout";

function Home() {
    return (
        <div className="text-center">Wholesaling Home</div>
    )
}

Home.layout = (page: React.ReactNode) => (
    <WholesalingLayout children={page} />
);
export default Home;