import "./Contact.css";

const Contact = ({firstName, lastName, image, statusClass, online}) => (
    <div className = "Contact">
    <img src={image} className="avatar"/>
     <div>
       <h3 className="name">{firstName} {lastName}</h3>
       <div className="status">
         <div className={statusClass}></div>
         <p className="status-text">{
             online ? "Online" : "Offline"
         }</p>
       </div>
     </div>
  </div>
);

export default Contact;