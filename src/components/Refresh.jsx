import { /* useState, */ useEffect } from 'react';
/* import { useLocation } from "react-router-dom"; */
import "../styles/home.css";

const Refresh = () => {

    /* const location = useLocation(); */
    /*const [shouldRefresh, setShouldRefresh] = useState(false);
     const [isRefreshing, setIsRefreshing] = useState(false); */

   /*  useEffect(() => { */
      // Check if the page was refreshed
      /* const wasRefreshed = localStorage.getItem('isRefreshing');
      if (wasRefreshed === "true") {
        setIsRefreshing(true);
        // Clear the refresh flag from localStorage
        localStorage.removeItem("isRefreshing");
      } */
  
      // Add an event listener to prevent accidental navigation
      /* const beforeUnloadListener = (e) => {
        if (shouldRefresh) {
          return undefined;
        }
          e.preventDefault();
          e.returnValue = "Changes you made may not be saved.";
        
      };
  
      window.addEventListener("beforeunload", beforeUnloadListener);
  
      return () => {
        window.removeEventListener("beforeunload", beforeUnloadListener);
      };
    }, [shouldRefresh]); */
  
    /* useEffect(() => {
      if (performance.getEntriesByType("navigation")[0].type === "reload") {
        // A browser refresh was triggered
        /* setShouldRefresh(true); 
        localStorage.setItem("lastPage", location.pathname);

        window.location.href = location.pathname;
      }
    }, [location]); */
    useEffect(() => {
      // Check if this is the first load by seeing if our object exists in local storage
      if (localStorage.getItem('firstLoadDone') === null) {
        // If it's the first load, set the flag in local storage to true and reload the page
        localStorage.setItem('firstLoadDone', 1);
        console.log('This is the initial load');
      } else {
        console.log('This is a page refresh');
      }
    }, []);
    return null; // The component doesn't render anything
};

export default Refresh;