import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
function AppProfile() {
  const handleClick = (event)=>{
    console.log(event);
    alert('버튼이 클릭됨');
  }
  return (
  <>
  <button onClick={handleClick}>버튼</button>
  <Profile 
  image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
  name="Martin Scorsesse"
  isNew={true}
  title="Film Maker"/>
    <Profile 
  image=" https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
  name="정서경"
  isNew={false}
  title="Writer"/>
    <Profile 
  image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
  name="김민희"
  isNew={true}
  title="Actress"/>
  <Avatar isNew={true} image = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"></Avatar>
  </>
  );
}

export default AppProfile;
