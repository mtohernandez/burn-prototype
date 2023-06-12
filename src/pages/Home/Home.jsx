import supabase from "../../supabase";

const Home = () => {

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div>
      Home
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Home