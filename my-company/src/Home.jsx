import { Outlet } from "react-router-dom";
function Home() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
