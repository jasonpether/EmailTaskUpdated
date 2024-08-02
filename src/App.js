import './App.css';
import Header from './Header'
import HeaderImage from './HeaderImage'
import FeaturedArticles from './FeaturedArticles'
import FeaturedTutorials from './FeaturedTutorials'
import Email from './Email'
import ListExampleIcon from './ContactInfo';

function App() {
  return (
    <div>
      <Header
        title="DEV@DEAKIN" 
        placeholder="Search..." 
        button1="Post" 
        button2="Login" 
      />
      <HeaderImage />

      <FeaturedArticles 
      title="Featured Articles"
      />

      <FeaturedTutorials
      title="Featured Tutorials"
      />

      <Email
      title="SIGN UP FOR OUR DAILY INSIDER"
      placeholder="Enter your Email!"
      button1="Subscribe"
      />

      <ListExampleIcon />

    </div>
  );
}
export default App;
