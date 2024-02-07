import "./styles/ClientProfile.css"


const ClientProfile = () => {
  const handleLogout = () => {
    document.cookie = 'isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    window.location.reload();
  };

  return (
    <section id="ClientProfile">
      <h1>Your Profile</h1>
      <div id="client-profile-container">
        
        <h2>Current Cars</h2>
        <div id="current-cars-container">

        </div>
        <h2>Previous Cars</h2>
        <div id="history-container">
        
        </div>
        <button className="login-button" id="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      
    </section>
  );
};
export default ClientProfile;